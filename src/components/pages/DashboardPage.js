import React, { Component } from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import { Grid, Segment, Table } from "semantic-ui-react";

class DashboardPage extends Component {
  renderTable = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Machine</Table.HeaderCell>
            <Table.HeaderCell>7AM</Table.HeaderCell>
            <Table.HeaderCell>11AM</Table.HeaderCell>
            <Table.HeaderCell>3PM</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Temperature Sensor</Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
          <Table.Row>
            <Table.Cell>Flow Sensor</Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];
    return (
      <div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <h1>Dashboard Page</h1>
              <Segment>
                <XYPlot height={300} width={900}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <LineSeries data={data} />
                </XYPlot>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <Segment>{this.renderTable()}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default DashboardPage;
