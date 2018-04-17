import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';

import PitchImage from './images/pitch-bg.png';
import PlayerImage from './images/player-shirt.png';


// import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

import { fetchTeamFormations } from '../../actions/formations.actions';

import scss from './formations.module.scss';

// import styles from './dashboard.style';

class Formations extends Component {
  componentDidMount() {
    this.props.fetchTeamFormations();
  }

  render() {
    const { formationsState } = this.props;
    console.log(formationsState);
    const { formation, players, team, isFetchingFormations } = formationsState;

    return (
      <Paper>
        <div className={classNames(scss['football-field'], scss[`grid-${formation}`])} style={{ backgroundImage: `url(${PitchImage})` }}>
          {!isFetchingFormations &&
            players.length && (
            players.map(player => (
              <div className={scss['football-player']} key={player.name}>
                <Tooltip title={`Position:${player.position} - ${player.type}`} placement="top">
                  <Avatar alt={player.name} src={PlayerImage} />
                </Tooltip>
                <Typography
                  component="span"
                  variant="subheading"
                  classes={{
                    root: scss['football-player__name']
                  }}
                >
                  {player.name}
                </Typography>
              </div>
            ))
          )}
        </div>
      </Paper>
    );
  }
}

Formations.propTypes = {
  // classes: PropTypes.shape({}).isRequired,
  fetchTeamFormations: PropTypes.func.isRequired,
  formationsState: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    formationsState: state.formationsState
  };
}

export default compose(
  // withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    fetchTeamFormations
  })
)(Formations);
