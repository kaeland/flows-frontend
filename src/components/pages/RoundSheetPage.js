import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchChartData,
  fetchPlantStats,
  fetchProfile
} from "../../utils/routes";
import { loadChartData } from "../../redux/actions/chartActions";
import { loadPlantStats } from "../../redux/actions/plantActions";
import _ from "lodash";
import { Menu, Segment, Grid, Input, Button, Form } from "semantic-ui-react";
import { APP_URL } from "../../utils/routes";
import { parseMachineRounds } from "../../utils/helperFunctions";

class RoundSheetPage extends Component {
  state = {
    activeItem: "tab1",
    showDelete: false,
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

  handleMachineRoundChange = (e, data) => {
    console.log("Event: ", e, "Data: ", data);
    this.setState(state => {
      return state.machines.map(machine => {
        if (machine.id === data.machine_id) {
          return machine.machine_rounds.map(mr => {
            return mr.id === data.id ? (mr.data = data.value) : mr;
          });
        }
      });
    });
  };

  handleMachineChange = (e, data) => {
    console.log("Event: ", e, "Data: ", data);
    this.setState(state => {
      return state.machines.map(machine => {
        return machine.id === data.machine_id
          ? (machine.name = data.value)
          : machine;
      });
    });
  };

  handleEnterKeyPress = e => {
    console.log("Event: ", e.target);
    console.log("Event value: ", e.target.value);
    console.log("Event id: ", e.target.id);
    console.log("Event key: ", e.key);
    const { id, value } = e.target;
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
    if (e.key === "Enter") {
      fetch(`${APP_URL}/machine_rounds/${id}`, options)
        .then(res => res.json())
        .then(data => this.props.loadChartData(data));
    }
  };

  handleMachineEnterKeyPress = e => {
    console.log("Event: ", e.target);
    console.log("Event value: ", e.target.value);
    console.log("Event id: ", e.target.id);
    console.log("Event key: ", e.key);
    const { id, value } = e.target;
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        machine: {
          name: value
        }
      })
    };
    if (e.key === "Enter") {
      fetch(`${APP_URL}/machines/${id}`, options)
        .then(res => res.json())
        .then(console.log);
    }
  };

  addMachine = () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        machine: {
          name: "",
          plant_id: 1
        }
      })
    };
    fetch(`${APP_URL}/machines`, options)
      .then(res => res.json())
      .then(machines => this.setState({ machines }));
  };

  deleteMachine = id => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }
    };
    fetch(`${APP_URL}/machines/${id}`, options)
      .then(res => res.json())
      .then(machines => this.setState({ machines }));
  };

  renderHeader = () => {
    if (this.props.match.url === "/roundsheet") {
      return (
        <Grid.Row centered>
          <Grid.Column mobile={15} computer={12} widescreen={9}>
            <h1>Roundsheet:</h1>
          </Grid.Column>
        </Grid.Row>
      );
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
        {this.renderHeader()}
        <Grid.Row centered>
          <Grid.Column mobile={15} computer={12} widescreen={9}>
            {/* Place Roundsheet Buttons Below */}
            <Grid.Row centered>
              <Grid.Column mobile={15} computer={12} widescreen={9}>
                <Button color="green" onClick={this.addMachine}>
                  Add Machine
                </Button>
                <Button
                  basic
                  color="violet"
                  style={{ marginLeft: "5px" }}
                  onClick={() =>
                    this.setState({ showDelete: !this.state.showDelete })
                  }
                >
                  Delete Machines
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Segment>
              <Grid padded celled>
                {/* Row of Headers for the Table */}
                <Grid.Row>
                  <Grid.Column as="h4" textAlign="left" width={4}>
                    Machines
                  </Grid.Column>
                  {rounds().map(({ time_of_day, id }) => {
                    return (
                      <Grid.Column key={id} as="h4" width={4}>
                        {time_of_day}
                      </Grid.Column>
                    );
                  })}
                </Grid.Row>

                {/* List of machines with their machine_round data */}
                {this.state.machines.map(
                  ({ name, machine_rounds, id: id_of_machine }) => {
                    return (
                      <Grid.Row key={id_of_machine}>
                        <Grid.Column textAlign="left" width={4}>
                          {this.state.showDelete ? (
                            <Button
                              basic
                              size="mini"
                              color="violet"
                              style={{ marginRight: "10px" }}
                              onClick={e => this.deleteMachine(id_of_machine)}
                            >
                              X
                            </Button>
                          ) : null}

                          <Input
                            name={name}
                            machine_id={id_of_machine}
                            transparent
                            placeholder="Machine name..."
                            value={name}
                            onChange={this.handleMachineChange}
                            onKeyPress={this.handleMachineEnterKeyPress}
                            id={id_of_machine}
                          />
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
                                  onChange={this.handleMachineRoundChange}
                                  onKeyPress={this.handleEnterKeyPress}
                                />
                              </Grid.Column>
                            );
                          }
                        )}
                      </Grid.Row>
                    );
                  }
                )}
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadChartData: data => dispatch(loadChartData(data)),
    loadPlantStats: plant => dispatch(loadPlantStats(plant))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RoundSheetPage);
