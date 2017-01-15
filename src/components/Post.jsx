import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  post: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: '5px'
  },
  postHeader: {
    flex: 1
  },
  postContent: {
    flex: 1
  }
};

const Post = ({ sheet: {classes}, text, title }) => (
  <article className={classes.post}>
    <header className={classes.postHeader}>
      {title}
    </header>
    <section>
      {text}
    </section>
  </article>
);

export default injectSheet(classes)(Post);
