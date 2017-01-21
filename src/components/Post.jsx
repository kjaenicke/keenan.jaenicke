import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';
import Category from './Category';

const classes = {
  post: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: '5px',
    backgroundColor: colors.white,
    marginBottom: '2%'
  },
  header: {
    flex: 1,
    padding: '2%',
  },
  content: {
    flex: 1,
    padding: '2%'
  },
  footer: {
    backgroundColor: colors.mediumGrey
  },
  author: {
    color: colors.green,
    fontWeight: 'bold'
  },
  categories: {
    color: colors.darkGrey,
    padding: '10px'
  }
};

const Post = ({ sheet: {classes}, text, title, author, datestamp, categories }) => (
  <article className={classes.post}>
    <header className={classes.header}>
      <h2 className={classes.postHeading}>{title}</h2>
      <div>
        <span className="byline">{datestamp} BY <span className={classes.author}>{author.name}</span></span>
      </div>
    </header>
    <section className={classes.content}>
      <p>{text}</p>
    </section>
    <footer className={classes.footer}>
      <p className={classes.categories}>
        <i className="fa fa-tag" aria-hidden="true"></i>
        { categories.map(c => <Category key={c.id} name={c.name} />) }
      </p>
    </footer>
  </article>
);

export default injectSheet(classes)(Post);
