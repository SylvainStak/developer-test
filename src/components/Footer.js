import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerContainer: {
    marginTop: 'calc(5% + 60px)',
    bottom: 0,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    marginLeft: '1rem',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.footerContainer}>
      <Container maxWidth="md">
        <Toolbar className={classes.linksContainer}>
          <Typography variant="body1" color="inherit">
            © 2021 Sylvain Afonso Developer Test
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;