import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../AppContext';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import utility from '../utility';

const useStyles = makeStyles({
  card: {
    width: 130,
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

function BerryCard(props) {
  const classes = useStyles();
  const { setBerryInfo } = useContext(AppContext);

  return (
    <>
      <Card className={classes.card} onClick={() => setBerryInfo(props.berryName || '')}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${utility.appUri}/berries/${props.berryName}-berry.png`}
            />
            <CardContent>
              <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                {utility.capitalizeName(props.berryName)}
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    </>
  );
}

export default BerryCard;
