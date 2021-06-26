import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import constants from '../constants';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  infoContainer: {
    backgroundColor: 'white',
    paddingTop: '5rem',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '200px',
    height: '200px',
  },
  name: {
    textAlign: 'center',
    color: '#333',
  },
  types: {
    justifyContent: 'center',
    display: 'flex',
  },
  typeChips: {
    margin: '1rem',
  },
  baseStatsContainer: {
    textAlign: 'center',
  },
  baseStatsLabel: {
    fontWeight: 'bold',
    marginLeft: '3rem',
  },
  tableContainer: {
    width: '400px',
    margin: '0 auto',
    backgroundColor: '#333',
    marginTop: '2rem',
  },
  colorWhite: {
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    marginLeft: '2rem',
  },
  backArrow: {
    marginRight: '1rem',
  },
});

function PokemonInfo(props) {
  const { match } = props;
  const classes = useStyles();
  const fetchDetails = () => axios(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemonName}`);
  const { isLoading, error, data } = useQuery(match.params.pokemonName, fetchDetails, { staleTime: 100000, cacheTime: 100000 });

  const renderTypes = () =>
    data.data.types.map(type =>
      <Chip
        label={type.type.name}
        color='primary'
        className={classes.typeChips}
        style={{ backgroundColor: constants.typeColors[type.type.name] }} />);

  const renderStatsTableRows = () =>
    data.data.stats.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row" className={classes.colorWhite}>
          {row.stat.name}
        </TableCell>
        <TableCell align="right" className={classes.colorWhite}>{row.base_stat}</TableCell>
        <TableCell align="right" className={classes.colorWhite}>{row.effort}</TableCell>
      </TableRow>
    ));

  return (
    <>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress /> : (
        <div className={classes.infoContainer}>
          {/* BACK LINK */}
          <Link
            to={constants.appUri}
            className={classes.link}
          >
            <Button variant="contained" color="default">
              <ArrowBackIcon fontSize="small" className={classes.backArrow}/> back to pokedex
            </Button>
          </Link>
          {/* BASE STATS */}
          <p className={classes.baseStatsContainer}>
            <span className={classes.baseStatsLabel}>Weight:</span> {data.data.weight}
            <span className={classes.baseStatsLabel}>Base Experience:</span> {data.data.base_experience}
          </p>
          {/* IMAGE */}
          <img src={data.data.sprites.other.dream_world.front_default} className={classes.image} />
          {/* NAME */}
          <h1 className={classes.name}>{data.data.name.toUpperCase()}</h1>
          {console.log(data)}
          {/* TYPES */}
          <div className={classes.types}>{renderTypes()}</div>
          {/* STATS TABLE */}
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.colorWhite}>Stat Name</TableCell>
                  <TableCell align="right" className={classes.colorWhite}>Stat Value</TableCell>
                  <TableCell align="right" className={classes.colorWhite}>Effort</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderStatsTableRows()}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}

export default PokemonInfo;