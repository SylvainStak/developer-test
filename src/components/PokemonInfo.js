import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    width: '350px',
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
  loader: {
    paddingTop: '5rem',
    marginLeft: '50%',
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
        key={type.type.name}
        label={type.type.name}
        color='primary'
        className={classes.typeChips}
        style={{ backgroundColor: constants.typeColors[type.type.name] }} />);

  const renderStatsTableRows = () =>
    data.data.stats.map((row, index) => (
      <TableRow key={row.name}>
        <TableCell key={`${row.name}-stat-${index}`} component="th" scope="row" className={classes.colorWhite}>{row.stat.name}</TableCell>
        <TableCell key={`${row.name}-value-${index}`} align="right" className={classes.colorWhite}>{row.base_stat}</TableCell>
        <TableCell key={`${row.name}-effort-${index}`} align="right" className={classes.colorWhite}>{row.effort}</TableCell>
      </TableRow>
    ));

  return (
    <>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress className={classes.loader} /> : (
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
            <span key="weight" className={classes.baseStatsLabel}>Weight:</span> {data.data.weight}
            <span key="base_experience" className={classes.baseStatsLabel}>Base Experience:</span> {data.data.base_experience}
          </p>
          {/* IMAGE */}
          <img src={data.data.sprites.other.dream_world.front_default} className={classes.image} alt="pokemon front side"/>
          {/* NAME */}
          <h1 className={classes.name}>{data.data.name.toUpperCase()}</h1>
          {/* TYPES */}
          <div className={classes.types}>{renderTypes()}</div>
          {/* STATS TABLE */}
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell key="stat-name" className={classes.colorWhite}>Stat Name</TableCell>
                  <TableCell key="stat-value" align="right" className={classes.colorWhite}>Stat Value</TableCell>
                  <TableCell key="stat-effort" align="right" className={classes.colorWhite}>Effort</TableCell>
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
