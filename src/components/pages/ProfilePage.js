import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setProfile } from '../../redux/actions/profileActions'
import { Grid, Card, Image, Icon } from "semantic-ui-react"
import { APP_URL } from '../../utils/routes'

class ProfilePage extends Component {
  componentDidMount() {
    const options = {
      headers: {
        method: 'GET',
        'Authorization': `Bearer ${localStorage.token}`
      }
    }
    fetch(`${APP_URL}/profile`, options)
      .then(res => res.json())
      .then(user => this.props.setProfile(user))
  }

  render() {
    const { avatar, bio, first_name, last_name, plant } = this.props.user
    const name = this.props.user.plant
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <h1>Profile Page</h1>
            <Card>
              <Image src={avatar} />
              <Card.Content>
                <Card.Header>{first_name} {last_name}</Card.Header>
                <Card.Description>{bio}</Card.Description>
              </Card.Content>
              <Card.Content>
                <Icon name='industry' />
                Plant: { plant === undefined ? null : plant.name }
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const user = state.profile
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (user) => dispatch(setProfile(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);