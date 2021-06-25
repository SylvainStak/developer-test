import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';
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
  container: {
    backgroundColor: '#333',
    paddingTop: '5rem',
  }
});


function Home() {
  const classes = useStyles();
  const fetchPokemons = () => axios('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const { isLoading, error, data } = useQuery('pokemons', fetchPokemons, {staleTime: 100000, cacheTime: 100000});
  const { filter } = useContext(AppContext);

  const renderPokemons = () =>
  data.data.results.map((pokemon, index) => 
  <PokemonCard key={index+1} id={index+1} name={pokemon.name} info={pokemon.url}/>);

  const renderPokemons2 = () => {
    let rawData = data.data.results;
    let newData = rawData.filter(pokemon => pokemon.name.includes(filter));
    //console.log(console.log(newData));
    return newData.map((pokemon, index) => 
    <PokemonCard key={index+1} id={index+1} name={pokemon.name} info={pokemon.url}/>);
  }

  return (
    <div className={classes.container}>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress /> : <div className={classes.pokemonList}>{renderPokemons2()}</div>}
    </div>
  );
}

export default Home;