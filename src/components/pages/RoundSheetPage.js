import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Menu, Segment, Grid, Input, Button } from "semantic-ui-react";
import { APP_URL } from "../../utils/routes";
import { parseMachineRounds } from "../../utils/helperFunctions";

class RoundSheetPage extends Component {
  state = {
    activeItem: "tab1",
    machineRounds: [], 
    editedRounds: []
  };

  componentDidMount() {
    const options = {
      headers: {
        method: "GET",
        Authorization: `Bearer ${localStorage.token}`
      }
    };
    fetch(`${APP_URL}/machine_rounds`, options)
      .then(res => res.json())
      .then(data =>
        this.setState({
          machineRounds: data, 
          editedRounds: data
        })
      );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = (e, data) => {
    let machineRound = {
      [e.target.name]: e.target.value
    };
    let stateArray = this.state.editedRounds;
    // debugger;
    
    const newMachineRounds = parseMachineRounds(stateArray, machineRound);
    this.setState({
      editedRounds: newMachineRounds
    });
  };

  handleSubmit = () => {
    const machineRounds = this.state.editedRounds;
    // const options = {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${localStorage.token}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     machine_round: machineRounds
    //   })
    // };
    // fetch(`${APP_URL}/machine_rounds`, options)
    //   .then(res => res.json())
    //   .then(console.log);

    console.log(machineRounds)
  };

  rounds = (num) => {
    const { editedRounds } = this.state
    if (_.isEmpty(editedRounds)) {
      // debugger
      return ''
    } else {
      return editedRounds[num].data
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <h1>RoundSheetPage Page</h1>

            <Segment>
              <Grid padded celled>
                <Grid.Row>
                  <Grid.Column as="h5" textAlign="left" width={4}>
                    Machines
                  </Grid.Column>
                  <Grid.Column as="h5" width={4}>
                    7AM
                  </Grid.Column>
                  <Grid.Column as="h5" width={4}>
                    11AM
                  </Grid.Column>
                  <Grid.Column as="h5" width={4}>
                    3PM
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column textAlign="left" width={4}>
                    Water Meter
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      name="11"
                      transparent
                      placeholder="Data..."
                      onChange={this.handleChange}
                      value={this.rounds(0)}
                    />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      name="12"
                      transparent
                      placeholder="Data..."
                      onChange={this.handleChange}
                      value={this.rounds(1)}
                    />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      onChange={this.handleChange}
                      name="13"
                      transparent
                      placeholder="Data..."
                      value={this.rounds(2)}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column textAlign="left" width={4}>
                    Temperature Sensor
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      onChange={this.handleChange}
                      name="21"
                      transparent
                      placeholder="Data..."
                      value={this.rounds(3)}
                    />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      onChange={this.handleChange}
                      name="22"
                      transparent
                      placeholder="Data..."
                      value={this.rounds(4)}
                    />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      onChange={this.handleChange}
                      name="23"
                      transparent
                      placeholder="Data..."
                      value={this.rounds(5)}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <Button primary floated="right" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  null,
  null
)(RoundSheetPage);
