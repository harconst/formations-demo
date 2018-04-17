import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import withWidth from 'material-ui/utils/withWidth';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

import PeopleIcon from 'material-ui-icons/People';
import DirectionsRunIcon from 'material-ui-icons/DirectionsRun';
import PersonIcon from 'material-ui-icons/Person';

import themeStyles from './player-list.style';

const PlayerList = (props) => {
  const {
    classes,
    players,
    width,
    team,
    formation
  } = props;

  return (
    <Drawer
      variant="persistent"
      open
      classes={{
        paper: width === 'xs' ? classes.mobileMenuPaper : classes.desktopMenuPaper,
        docked: classes.fullHeight
      }}
      anchor="left"
      ModalProps={{
        keepMounted: true
      }}
    >
      <div className={classNames(classes.drawerInner, 'util-hide-scrollbars')}>
        {team &&
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={team} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DirectionsRunIcon />
                </ListItemIcon>
                <ListItemText primary={formation} />
              </ListItem>
            </List>
            <Divider />
          </div>
        }
        <List component="nav" className={classes.list}>
          {players && players.map(player => ([
            <ListItem
              disableGutters
              key={`${player.name}a`}
              classes={{
                root: classes['player-list__item']
              }}
            >
              <Avatar>
                <PersonIcon />
              </Avatar>
              <ListItemText
                primary={player.name}
                secondary={`${player.type}`}
                classes={{
                  primary: classes['player-list__item__text'],
                  secondary: classes['player-list__item__text']
                }}
              />
            </ListItem>,
            <Divider key={`${player.name}b`} />
          ]))}
        </List>
      </div>
    </Drawer>
  );
};

PlayerList.defaultProps = {
  players: null,
  team: null,
  formation: null
};

PlayerList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({})),
  width: PropTypes.string.isRequired,
  team: PropTypes.string,
  formation: PropTypes.string
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(PlayerList);
