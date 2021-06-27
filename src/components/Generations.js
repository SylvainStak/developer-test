import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import utility from '../utility';
import CircularProgress from '@material-ui/core/CircularProgress';
import GenerationAccordion from './GenerationAccordion';

const useStyles = makeStyles({
  generationsContainer: {
    backgroundColor: 'white',
    paddingTop: '5rem',
  },
  title: {
    textAlign: 'center',
  },
  loader: {
    paddingTop: '5rem',
    marginLeft: '50%',
  },
});

function Generations() {
  const classes = useStyles();
  const fetchGenerations = () => axios('https://pokeapi.co/api/v2/generation');
  const { isLoading, error, data } = useQuery('generations',
                                               fetchGenerations,
                                               {staleTime: utility.reactQueryTimings.generationList.staleTime,
                                               cacheTime: utility.reactQueryTimings.generationList.cacheTime});

  const renderTypes = () =>
    data && data.data.results.map(generation =>
      <GenerationAccordion key={generation.name} name={generation.name.toUpperCase()} url={generation.url}/>);
  
  return (
    <div className={classes.generationsContainer}>
      <h1 className={classes.title}><em>GENERATIONS</em></h1>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress className={classes.loader} /> : <>{renderTypes()}</>}
    </div>
  );
}

export default Generations;
