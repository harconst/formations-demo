import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

// import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

import { fetchTeamFormations } from '../../actions/formations.actions';

import scss from './formations.module.scss';

// import styles from './dashboard.style';

class Formations extends Component {
  componentDidMount() {
    this.props.fetchTeamFormations();
  }

  render() {
    const { classes, formationsState } = this.props;
    console.log(formationsState);
    const { formation, players, team, isFetchingFormations } = formationsState;

    return (
      <div className={scss['football-field']}>
        {!isFetchingFormations &&
          players.length && (
          players.map(player => (
            <div key={player.name}>{player.name}</div>
          ))
        )}
      </div>
    );
  }
}

Formations.propTypes = {
  classes: PropTypes.shape({}).isRequired,
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
