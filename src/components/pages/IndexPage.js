import React from "react";
import Particles from "react-particles-js";
import { Grid, Segment } from "semantic-ui-react";
import "../../IndexPage.css";

const IndexPage = () => {
  return (
    <div className="Login-component">
      <Particles />
      <Grid verticalAlign="middle">
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={8} widescreen={8}>
            <div>
              <h1>Flows</h1>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default IndexPage;
