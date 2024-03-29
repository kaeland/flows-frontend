import React, { Component } from "react";
import { connect } from "react-redux";
import { loadChartData } from "../../redux/actions/chartActions";
import { loadPlantStats } from "../../redux/actions/plantActions";
import RoundSheetPage from "../pages/RoundSheetPage";
import { fetchChartData, fetchPlantStats } from "../../utils/routes";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  makeWidthFlexible
} from "react-vis";
import {
  Grid,
  Segment,
  Table,
  Button,
  Container,
  Statistic,
  Icon
} from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

class DashboardPage extends Component {
  componentDidMount() {
    fetchChartData().then(data => this.props.loadChartData(data));
    fetchPlantStats().then(plant => this.props.loadPlantStats(plant));
  }

  renderCharts = () => {
    return this.props.chart.map(({ id, data }) => {
      return <LineSeries key={id} data={data} curve={"curveMonotoneX"} />;
    });
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <h1>Dashboard</h1>
            </Grid.Column>
          </Grid.Row>

          {/* The Row for the Plant stats */}
          <Grid.Row centered>
            <Grid.Column mobile={5} computer={4} widescreen={3}>
              <Segment>
                <Statistic
                  color="blue"
                  style={{ display: "inline" }}
                  size="large"
                >
                  <Statistic.Value>
                    <Icon name="cogs" />
                    {this.props.plant.machine_count}
                  </Statistic.Value>
                  <Statistic.Label>Machines</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>

            <Grid.Column mobile={5} computer={4} widescreen={3}>
              <Segment>
                <Statistic
                  color="green"
                  style={{ display: "inline" }}
                  size="large"
                >
                  <Statistic.Value>
                    <Icon name="chart bar outline" />
                    {this.props.plant.data_point_count}
                  </Statistic.Value>
                  <Statistic.Label>Unique Data Points</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>

            <Grid.Column mobile={5} computer={4} widescreen={3}>
              <Segment>
                <Statistic
                  color="violet"
                  style={{ display: "inline" }}
                  size="large"
                >
                  <Statistic.Value>
                    <Icon name="user circle" />
                    {this.props.plant.user_count}
                  </Statistic.Value>
                  <Statistic.Label>Users</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          {/* The Row for the Chart */}
          <Grid.Row centered>
            <Grid.Column mobile={15} computer={12} widescreen={9}>
              <Segment>
                <FlexibleXYPlot height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  {this.renderCharts()}
                </FlexibleXYPlot>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row />

          </Grid>

          {/* The Row for the Roundsheet; Roundsheet has its own Grid */}
          <RoundSheetPage match={this.props.match} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { chart, plant } = state;
  return {
    chart,
    plant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadChartData: data => dispatch(loadChartData(data)),
    loadPlantStats: plant => dispatch(loadPlantStats(plant))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
