import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import constants from '../constants';

const useStyles = makeStyles({
  card: {
    width: 180,
    margin: 10,
    backgroundColor: 'lightyellow',
  },
  media: {
    height: 140,
    backgroundSize: 100,
  },
  name: {
    textAlign: 'center',
    color: '#3477eb',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
  },
});

function PokemonCard(props) {
  const classes = useStyles();
  const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <Card className={classes.card}>
        <Link
          to={`${constants.appUri}/info/${props.name}`}
          className={classes.link}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${constants.appUri}/pokemon/${props.name}.png`}
            />
            <CardContent>
              <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                {capitalizeName(props.name)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}

export default PokemonCard;
