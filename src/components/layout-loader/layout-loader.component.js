import React from 'react';

import { CircularProgress } from 'material-ui/Progress';

import scss from './layout-loader.module.scss';

const LayoutLoader = () => (
  <div className={scss['loader-wrapper']}>
    <CircularProgress size={50} />
    Loading...
  </div>
);

export default LayoutLoader;
