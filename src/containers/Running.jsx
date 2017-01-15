import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';

const classes = {
  header: common.pageLayout.pageHeader
};

const Running = ({ sheet: {classes} }) => (
  <div className="running">
    <h3 className={classes.header}>
      Running
    </h3>
  </div>
);

export default injectSheet(classes)(Running);
