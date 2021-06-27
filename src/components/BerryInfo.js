import React, { useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../AppContext';
import { useQuery } from 'react-query';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import utility from '../utility';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  noResults: {
    textAlign: 'center',
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
  berryTitle: {
    textAlign: 'center',
  },
  loader: {
    paddingTop: '5rem',
    marginLeft: '50%',
  },
});

function BerryInfo() {
  const classes = useStyles();
  const { berryInfo } = useContext(AppContext);
  const fetchBerryDetails = () => axios(`https://pokeapi.co/api/v2/berry/${berryInfo}`);
  const { isLoading, error, data } = useQuery(berryInfo || 'default',
                                              fetchBerryDetails,
                                              {staleTime: utility.reactQueryTimings.berryDetail.staleTime,
                                              cacheTime: utility.reactQueryTimings.berryDetail.cacheTime});

  return (
    <>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading && <CircularProgress className={classes.loader} />}
      {!berryInfo && <h3 className={classes.noResults}>Click on a berry to show information</h3>}
      <Container fixed>
        {berryInfo && !isLoading &&
          <>
            <h1 className={classes.berryTitle}><em>{utility.capitalizeName(berryInfo)} Berry</em></h1>
            <TableContainer component={Paper} className={classes.tableContainer}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell key="stat-name" className={classes.colorWhite}>Stat Name</TableCell>
                    <TableCell key="stat-value" align="right" className={classes.colorWhite}>Stat Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* STAT ROWS */}
                  <TableRow key="growth_time">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Growth Time</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.growth_time}</TableCell>
                  </TableRow>

                  <TableRow key="max_harvest">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Max Harvest</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.max_harvest}</TableCell>
                  </TableRow>

                  <TableRow key="natural_gift_power">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Natural Gift Power</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.natural_gift_power}</TableCell>
                  </TableRow>

                  <TableRow key="size">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Size</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.size}</TableCell>
                  </TableRow>

                  <TableRow key="smoothness">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Smoothness</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.smoothness}</TableCell>
                  </TableRow>

                  <TableRow key="soil_dryness">
                    <TableCell component="th" scope="row" className={classes.colorWhite}>Soil Dryness</TableCell>
                    <TableCell align="right" className={classes.colorWhite}>{data.data.soil_dryness}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        }
      </Container>
    </>
  );
}

export default BerryInfo;
