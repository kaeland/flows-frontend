import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";

const NotFoundPage = (props) => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={14} computer={12} widescreen={8}>
          <Message info>
            <Message.Header
              style={{ display: "flex", justifyContent: "center" }}
            >
            {props.match.path === "/" ? (
              "Leaving so soon."
            ) : (
              "404 Page Not Found"
            )}
            </Message.Header>
            <Message.Content
              style={{ display: "flex", justifyContent: "center" }}
            >
              {props.match.path === "/" ? (
                <p>You're always welcome here at Flows. Come back anytime</p>
              ) : (
                <p>Woops! Try the back button to navigate to another page. </p>
              )}
            </Message.Content>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NotFoundPage;
