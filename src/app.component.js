import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import scss from './app.module.scss';

import Formations from './containers/formations/formations.component';
import configuredTheme from './config';

class App extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const materialTheme = createMuiTheme(configuredTheme);

    return (
      <MuiThemeProvider theme={materialTheme}>
        <div className={scss['app-container']}>
          <AppBar color="default" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Rush Formations Demo
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container alignItems="center" justify="center" className={scss['content-container-wrapper']}>
            <Grid item xs={12} sm={10} md={8} lg={6} className={scss['content-container']}>

                <Formations />

            </Grid>
          </Grid>
          <AppBar color="default" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                <small>&copy; 2018 harconst</small>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
