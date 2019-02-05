import React from "react";
import { Grid, Container, Message } from "semantic-ui-react";

const AppGrid = props => {
  return (
    <Grid>
      {props.message && (
        <Grid.Row>
          <Grid.Column width={14} computer={12} widescreen={8}>
            <Message>{props.message}</Message>
          </Grid.Column>
        </Grid.Row>
      )}

      {props.body && (
        <Grid.Row>
          <Grid.Column width={14} computer={12} widescreen={8}>
            {props.body}
          </Grid.Column>
        </Grid.Row>
      )}
    </Grid>
  );
};

export default AppGrid;
