import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import utility from '../utility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: 'white',
    marginRight: theme.spacing(2),
    '&:hover': {
      color: 'lightgray',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  linkContainer: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Nav() {
  const classes = useStyles();
  const { setFilter } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* HOMEPAGE LINK */}
          <div className={classes.linkContainer}>
            <Link to={utility.appUri}>
              <h3 className={classes.title}>PokeAPI</h3>
            </Link>
          </div>
          {/* TEST1 LINK */}
          <div className={classes.linkContainer}>
            <Link to={`${utility.appUri}/test1`}>
              <h3 className={classes.title}>Test1</h3>
            </Link>
          </div>
          {/* TEST2 LINK */}
          <div className={classes.linkContainer}>
            <Link to={`${utility.appUri}/test2`}>
              <h3 className={classes.title}>Test2</h3>
            </Link>
          </div>
          {/* SEARCH BAR */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => setFilter(event.target.value.toLowerCase())}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
