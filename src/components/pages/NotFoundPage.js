import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";

const NotFoundPage = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={14} computer={12} widescreen={8}>
          <Message info>
            <Message.Header
              style={{ display: "flex", justifyContent: "center" }}
            >
              404 Page Not Found
            </Message.Header>
            <Message.Content
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p>Woops! Try the back button to navigate to another page. </p>
            </Message.Content>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NotFoundPage;
