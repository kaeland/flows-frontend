import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadRounds } from "../../redux/actions/roundActions";
import { fetchRounds } from "../../utils/routes";

import { Grid, Segment } from "semantic-ui-react";

class RoundsPage extends Component {
  componentDidMount() {
    fetchRounds().then(rounds => this.props.loadRounds(rounds));
  }

  renderRounds = () => {
    return this.props.round.map(round => {
      return (
        <Segment>
          <Link to="/dashboard">
            <h2>{round.time_of_day}</h2>
          </Link>
        </Segment>
      );
    });
  };

  render() {
    return (
      <div>
        <Grid>
          {/* The page title here: */}
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <h1>Rounds:</h1>
            </Grid.Column>
          </Grid.Row>

          {/* The page title here: */}
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              {this.renderRounds()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { round } = state;
  return {
    round
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRounds: rounds => dispatch(loadRounds(rounds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundsPage);
