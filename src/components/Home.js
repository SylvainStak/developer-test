import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import {useQuery} from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  pokemonList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: '5rem',
  },
  loader: {
    marginLeft: '50%',
  }
});

function Home() {
  const classes = useStyles();
  const fetchPokemons = () => axios('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const { isLoading, error, data } = useQuery('pokemons', fetchPokemons, {staleTime: 100000, cacheTime: 100000});
  const { filter } = useContext(AppContext);

  const renderPokemons = () => {
    let filteredData = data.data.results.filter(pokemon => pokemon.name.includes(filter));
    return filteredData.length > 0 ? filteredData.map((pokemon, index) => 
    <PokemonCard key={index+1} id={index+1} name={pokemon.name} info={pokemon.url}/>) : 
    <div>{`No results for "${filter}"`}</div>
  }

  return (
    <div className={classes.container}>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ?
        <CircularProgress className={classes.loader} />
        :
        <div className={classes.pokemonList}>{renderPokemons()}</div>
      }
    </div>
  );
}

export default Home;