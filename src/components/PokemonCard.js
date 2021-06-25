import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 200,
    margin: 10,
  },
  media: {
    height: 140,
    backgroundSize: 100,
  },
  name: {
    textAlign: 'center',
    color: '#3477eb',
    fontWeight: 'bold',
  }
});

function PokemonCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`/developer-test/pokemon/${props.name}.png`}
          />
          <CardContent>
            <Typography className={classes.name} gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default PokemonCard;