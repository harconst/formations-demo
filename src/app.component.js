import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import Grid from 'material-ui/Grid';
import Slide from 'material-ui/transitions/Slide';
import Hidden from 'material-ui/Hidden';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import scss from './app.module.scss';

import { setSnackbarOpen } from './actions/layout.actions';
import { fetchTeamFormations } from './actions/formations.actions';

import Formations from './containers/formations/formations.component';
import PlayerList from './containers/player-list/player-list.component';
import configuredTheme from './config';

const materialTheme = createMuiTheme(configuredTheme);

class App extends Component {
  componentDidMount() {
    this.props.fetchTeamFormations();
  }

  transitionUp = props => (<Slide direction="up" {...props} />);

  render() {
    const { layoutState, formationsState } = this.props;

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
          <div className={scss['layout-container']}>
            {formationsState.players && formationsState.players.length && ([
              <PlayerList key={1} players={formationsState.players} team={formationsState.team} formation={formationsState.formation} />,
              <Hidden only="xs" key={2}>
                <Grid container alignItems="center" justify="center" className={scss['content-container-wrapper']}>
                  <Grid item xs={12} className={scss['content-container']}>
                    <Formations formation={formationsState.formation} players={formationsState.players} />
                  </Grid>
                </Grid>
              </Hidden>
            ])}
          </div>
          <AppBar color="default" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                <small>&copy; 2018 harconst</small>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Snackbar
          open={layoutState.snackbarOpen}
          onClose={() => this.props.setSnackbarOpen(false)}
          transition={this.transitionUp}
          autoHideDuration={4000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{layoutState.message}</span>}
        />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setSnackbarOpen: PropTypes.func.isRequired,
  fetchTeamFormations: PropTypes.func.isRequired,
  layoutState: PropTypes.shape({}).isRequired,
  formationsState: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    layoutState: state.layoutState,
    formationsState: state.formationsState
  };
}

export default compose(connect(mapStateToProps, { setSnackbarOpen, fetchTeamFormations }))(App);
