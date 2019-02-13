import React, { Component } from "react";
import { connect } from "react-redux";
import { setProfile } from "../../redux/actions/profileActions";
import { Grid, Card, Image, Icon, Button } from "semantic-ui-react";
import { APP_URL } from "../../utils/routes";

class ProfilePage extends Component {
  componentDidMount() {
    const options = {
      headers: {
        method: "GET",
        Authorization: `Bearer ${localStorage.token}`
      }
    };
    fetch(`${APP_URL}/profile`, options)
      .then(res => res.json())
      .then(user => this.props.setProfile(user));
  }

  render() {
    const { avatar, bio, first_name, last_name, plant } = this.props.user;
    const name = this.props.user.plant;
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8}>
            <div style={{ marginTop: '75px' }}>
              <Card color="blue" centered>
                <Image src={avatar} size="large" />
                <Card.Content>
                  <Card.Header>
                    {first_name} {last_name}
                  </Card.Header>
                  <Card.Description>Bio: {bio}</Card.Description>
                </Card.Content>
                <Card.Content>
                  <Button
                    primary
                    fluid
                    onClick={() => this.props.history.push("/profile/edit")}
                  >
                    Edit
                  </Button>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={10} widescreen={8} />
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const user = state.profile;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProfile: user => dispatch(setProfile(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
