import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Menu, Segment, Grid, Input, Button } from "semantic-ui-react";
import { APP_URL } from "../../utils/routes";
import { parseMachineRounds } from "../../utils/helperFunctions";

class RoundSheetPage extends Component {
  state = {
    activeItem: "tab1",
    machines: []
  };

  componentDidMount() {
    const options = {
      headers: {
        method: "GET",
        Authorization: `Bearer ${localStorage.token}`
      }
    };
    fetch(`${APP_URL}/machines`, options)
      .then(res => res.json())
      .then(machines =>
        this.setState({
          machines: machines
        })
      );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // handleChange = (e, data) => {
  //   let machineRound = {
  //     [e.target.name]: e.target.value
  //   };
  //   let stateArray = this.state.machineRounds;
  //   console.log(machineRound, stateArray);

  //   const newMachineRounds = parseMachineRounds(stateArray, machineRound);
  //   this.setState(state => {
  //     return { machineRounds: newMachineRounds };
  //   });
  // };

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

    console.log(machineRounds);
  };

  rounds = num => {
    const { editedRounds } = this.state;
    if (_.isEmpty(editedRounds)) {
      // debugger
      return "";
    } else {
      return editedRounds[num].data;
    }
  };

  render() {
    const { activeItem } = this.state;
    const rounds = () => {
      return this.state.machines[0] !== undefined
        ? this.state.machines[0].rounds
        : [];
    };
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <h1>Roundsheet Page</h1>

            <Segment>
              <Grid padded celled>
                {/* Row of Headers for the Table */}
                <Grid.Row>
                  <Grid.Column as="h5" textAlign="left" width={4}>
                    Machines
                  </Grid.Column>
                  {rounds().map(({ time_of_day }) => {
                    return (
                      <Grid.Column as="h5" width={4}>
                        {time_of_day}
                      </Grid.Column>
                    );
                  })}
                </Grid.Row>

                {/* List of machines with their machine_round data */}
                {this.state.machines.map(({ name, machine_rounds }) => {
                  return (
                    <Grid.Row>
                      <Grid.Column textAlign="left" width={4}>
                        {name}
                      </Grid.Column>
                      {machine_rounds.map(({ data, machine_id, round_id }) => {
                        return (
                          <Grid.Column width={4}>
                            <Input
                              name={`${machine_id}${round_id}`}
                              transparent
                              placeholder="Data..."
                              value={data}
                            />
                          </Grid.Column>
                        );
                      })}
                    </Grid.Row>
                  );
                })}
              </Grid>
            </Segment>
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
