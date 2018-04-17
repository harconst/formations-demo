import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';

import PitchImage from './images/pitch-bg.png';
import PlayerImage from './images/player-shirt.png';


import scss from './formations.module.scss';

const Formations = props => (
  <Paper classes={{
    root: scss['full-height']
  }}
  >
    <div className={classNames(scss['football-field'], scss[`grid-${props.formation}`])} style={{ backgroundImage: `url(${PitchImage})` }}>
      { props.players.length && (
        props.players.map(player => (
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

Formations.propTypes = {
  formation: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Formations;
