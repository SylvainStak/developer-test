import React from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import {useQuery} from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  card: {
    width: 200,
    margin: 10,
  },
  media: {
    height: 140,
    backgroundSize: 60,
  },
  pokemonList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});


function Home() {
  const classes = useStyles();
  const fetchLuke = () => axios('https://pokeapi.co/api/v2/pokemon/?limit=100');
  const { isLoading, error, data } = useQuery('luke', fetchLuke, {staleTime: 100000, cacheTime: 100000});

  const renderPokemons = () =>
  data.data.results.map((pokemon, index) => 
  <PokemonCard key={index+1} id={index+1} name={pokemon.name} info={pokemon.url}/>);

  return (
    <div className="App">
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress /> : <div className={classes.pokemonList}>{renderPokemons()}</div>}
    </div>
  );
}

export default Home;