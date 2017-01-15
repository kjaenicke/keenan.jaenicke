import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';

const classes = {
  header: common.pageLayout.pageHeader
};

const Contact = ({ sheet: {classes} }) => (
  <div className="contact">
    <h3 className={classes.header}>
      Contact
    </h3>
  </div>
);

export default injectSheet(classes)(Contact);
