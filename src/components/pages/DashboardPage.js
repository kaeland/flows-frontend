import React, { Component } from "react";
import { connect } from "react-redux";
import { loadChartData } from "../../redux/actions/chartActions";
import RoundSheetPage from "../pages/RoundSheetPage";
import { fetchChartData } from "../../utils/routes";
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
import { Grid, Segment, Table, Button, Container } from "semantic-ui-react";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

class DashboardPage extends Component {
  componentDidMount() {
    fetchChartData().then(data => this.props.loadChartData(data));
  }

  renderCharts = () => {
    return this.props.chart.map(({ id, data }) => {
      return <LineSeries key={id} data={data} />
    })  
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <h1>Dashboard Page</h1>

              <Segment>
                <FlexibleXYPlot height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  { this.renderCharts() }
                </FlexibleXYPlot>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row />

          {/* Place Roundsheet Below */}
          <RoundSheetPage />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { chart } = state
  return {
    chart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadChartData: data => dispatch(loadChartData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
