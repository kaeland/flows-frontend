import React, { Component } from 'react'
import { Menu, Segment, Grid, Input } from 'semantic-ui-react'

// Use this for the RoundSheet Component
export default class MenuExampleAttachedTabular extends Component {
  state = { activeItem: 'tab1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Day Shift' active={activeItem === 'Day Shift'} onClick={this.handleItemClick} />
          <Menu.Item name='Night Shift' active={activeItem === 'Night Shift'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached='bottom'>
          <Grid padded celled>
            <Grid.Row>
              <Grid.Column as="h5" textAlign='left' width={4}>
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
              <Grid.Column textAlign='left' width={4}>
                Temperature Sensor
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
            </Grid.Row>
        
            <Grid.Row>
              <Grid.Column textAlign='left' width={4}>
                Flow Sensor
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
              <Grid.Column width={4}>
                <Input transparent placeholder='Search...' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}






// ----------------------------

<Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <h1>RoundSheetPage Page</h1>

            <Segment>
              <Grid padded celled>
                {/* Table Header: 1 row */}
                <Grid.Row>
                {/* 1st Column Header: Machines */}
                <Grid.Column as="h5" textAlign="left" width={4}>
                Machines
                </Grid.Column>
                {/* List of round.names */}
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
                
                {/* List of round.data */}
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
                      value={this.state.editedRounds.data ? this.state.editedRounds.data : null}
                    />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Input
                      name="12"
                      transparent
                      placeholder="Data..."
                      onChange={this.handleChange}
                      value={this.state.editedRounds.data ? this.state.editedRounds.data : null}
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