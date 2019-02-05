import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Segment, Grid, Input, Button } from "semantic-ui-react";

class RoundSheetPage extends Component {
  state = { 
    activeItem: "tab1" 
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <h1>RoundSheetPage Page</h1>

            {/* Editable Table below... */}
            <Menu attached="top" tabular>
              <Menu.Item
                name="Day Shift"
                active={activeItem === "Day Shift"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Night Shift"
                active={activeItem === "Night Shift"}
                onClick={this.handleItemClick}
              />
            </Menu>

            <Segment attached="bottom">
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
                    Temperature Sensor
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column textAlign="left" width={4}>
                    Flow Sensor
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input transparent placeholder="Search..." />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <Button primary floated="right">Submit</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null, null)(RoundSheetPage);
