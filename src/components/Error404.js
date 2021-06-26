import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import utility from '../utility';

const useStyles = makeStyles({
  errorContainer: {
    backgroundColor: 'white',
    paddingTop: '5rem',
  },
  title: {
    textAlign: 'center',
  },
  backArrow: {
    marginRight: '1rem',
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    marginLeft: '2rem',
  },
});

function Error404() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.errorContainer}>
        <Link to={utility.appUri} className={classes.link}>
          <Button variant="contained" color="default">
            <ArrowBackIcon fontSize="small" className={classes.backArrow}/> back to pokedex
          </Button>
        </Link>
        <h1 className={classes.title}>Page Not Found</h1>
      </div>
    </>
  );
}

export default Error404;
