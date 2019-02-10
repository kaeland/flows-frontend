import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Menu, Segment, Grid, Input, Button, Form } from "semantic-ui-react";
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

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = (e, data) => {
    console.log("Event: ", e, "Data: ", data);
    this.setState(state => {
      return state.machines[data.machine_id - 1].machine_rounds.map((mr) => {
        return mr.id === data.id 
        ? mr.data = data.value
        : mr 
      })
    });
  };
  
  
  
  handleEnterKeyPress = (e) => {
    console.log("Event: ", e.target);
    console.log("Event value: ", e.target.value);
    console.log("Event id: ", e.target.id);
    console.log("Event key: ", e.key);
    const { id, value } = e.target
    const options = {
        method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        machine_round: {
          data: value 
        }
      })
    };
    if (e.key === 'Enter') {
      fetch(`${APP_URL}/machine_rounds/${id}`, options)
        .then(res => res.json())
        .then(console.log);
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
                  {rounds().map(({ time_of_day, id }) => {
                    return (
                      <Grid.Column key={id} as="h5" width={4}>
                        {time_of_day}
                      </Grid.Column>
                    );
                  })}
                </Grid.Row>

                {/* List of machines with their machine_round data */}
                {this.state.machines.map(({ name, machine_rounds, id }) => {
                  return (
                    <Grid.Row key={id}>
                      <Grid.Column textAlign="left" width={4}>
                        {name}
                      </Grid.Column>
                      {machine_rounds.map(
                        ({ data, machine_id, round_id, id }) => {
                          return (
                            <Grid.Column key={id} width={4}>
                              <Input
                                name={`${machine_id}${round_id}`}
                                machine_id={machine_id}
                                round_id={round_id}
                                transparent
                                placeholder="Data..."
                                value={data}
                                id={id}
                                onChange={this.handleChange}
                                onKeyPress={this.handleEnterKeyPress}
                              />
                            </Grid.Column>
                          );
                        }
                      )}
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
