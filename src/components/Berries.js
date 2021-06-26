import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import BerryCard from './BerryCard';
import BerryInfo from './BerryInfo';
import CircularProgress from '@material-ui/core/CircularProgress';
import utility from '../utility';

const useStyles = makeStyles({
  berryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: '5rem',
  },
  loader: {
    marginLeft: '50%',
  }
});

function Berries() {
  const classes = useStyles();
  const { filter } = useContext(AppContext);
  const fetchBerries = () => axios('https://pokeapi.co/api/v2/berry?limit=64');
  const { isLoading, error, data } = useQuery('berries',
                                               fetchBerries,
                                               {staleTime: utility.reactQueryTimings.berryList.staleTime,
                                               cacheTime: utility.reactQueryTimings.berryList.cacheTime});

  const renderBerries = () => {
    let filteredData = data.data.results.filter(berry => berry.name.includes(filter));
    return filteredData.length > 0 ? filteredData.map((berry, index) => 
    <BerryCard key={index+1} id={index+1} berryName={berry.name} info={berry.url}/>) :
    <div>{`No results for "${filter}"`}</div>
  }

  return (
    <div className={classes.container}>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ?
        <CircularProgress className={classes.loader} />
        :
        <>
          <BerryInfo />
          <div className={classes.berryList}>{renderBerries()}</div>
        </>
      }
    </div>
  );
}

export default Berries;
