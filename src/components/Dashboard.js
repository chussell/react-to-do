import React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ToDos from './ToDos';
import Nav from './Nav';

class Dashboard extends Component {

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <ToDos />
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;