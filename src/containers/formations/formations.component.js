import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';

import PitchImage from './images/pitch-bg.png';
import PlayerImage from './images/player-shirt.png';

import { fetchTeamFormations } from '../../actions/formations.actions';

import scss from './formations.module.scss';

class Formations extends Component {
  componentDidMount() {
    this.props.fetchTeamFormations();
  }

  render() {
    const { formationsState } = this.props;
    const { formation, players, isFetchingFormations } = formationsState;

    return (
      <Paper classes={{
        root: scss['full-height']
      }}>
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
                  variant="body2"
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
  fetchTeamFormations: PropTypes.func.isRequired,
  formationsState: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    formationsState: state.formationsState
  };
}

export default connect(mapStateToProps, { fetchTeamFormations })(Formations);
