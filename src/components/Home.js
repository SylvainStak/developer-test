import React, { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../AppContext';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import PokemonCard from './PokemonCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import utility from '../utility';

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
  const { filter } = useContext(AppContext);
  const fetchPokemons = () => axios('https://pokeapi.co/api/v2/pokemon/?limit=151');  
  const { isLoading, error, data } = useQuery('pokemons',
                                               fetchPokemons,
                                               {staleTime: utility.reactQueryTimings.pokemonList.staleTime,
                                               cacheTime: utility.reactQueryTimings.pokemonList.cacheTime});

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
