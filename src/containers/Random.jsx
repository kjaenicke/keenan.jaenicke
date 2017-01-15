import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';

const classes = {
  header: common.pageLayout.pageHeader
};

const Random = ({ sheet: {classes} }) => (
  <div className="random">
    <h3 className={classes.header}>
      Random
    </h3>
  </div>
);

export default injectSheet(classes)(Random);
