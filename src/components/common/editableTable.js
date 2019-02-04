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
