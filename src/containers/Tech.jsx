import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';

const classes = {
  header: common.pageLayout.pageHeader
};

const Tech = ({ sheet: {classes} }) => (
  <div className="tech">
    <h3 className={classes.header}>
      Tech
    </h3>
  </div>
);

export default injectSheet(classes)(Tech);
