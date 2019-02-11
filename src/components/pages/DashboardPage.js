import React, { Component } from "react";
import RoundSheetPage from "../pages/RoundSheetPage";
import { APP_URL } from '../../utils/routes';
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import { Grid, Segment, Table, Button } from "semantic-ui-react";

class DashboardPage extends Component {
  addMachine = () => {
    const options = {
      method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      machine: {
        name: '', 
        plant_id: 1  
      }
    })
  };
    fetch(`${APP_URL}/machines`, options)
      .then(res => res.json())
      .then(console.log)
  }

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

          <Grid.Row />
          {/* Place Roundsheet Buttons Below */}
          <Grid.Row centered>
            <Grid.Column mobile={14} computer={12} widescreen={8}>
              <Button>Add Machine</Button>
            </Grid.Column>
          </Grid.Row>

          {/* Place Roundsheet Below */}
          <RoundSheetPage />
        </Grid>
      </div>
    );
  }
}

export default DashboardPage;
