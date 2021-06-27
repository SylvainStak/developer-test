import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import utility from '../utility';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionTab: {
    backgroundColor: '#333',
    color: 'white',
    marginTop: '.5rem',
  },
  colorWhite: {
    color: 'white',
  },
  loader: {
    paddingTop: '5rem',
    marginLeft: '50%',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '1rem',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function GenerationAccordion(props) {
  const classes = useStyles();
  const fetchGenerationDetails = () => axios(props.url);
  const { isLoading, error, data } = useQuery(props.name,
                                              fetchGenerationDetails,
                                              {staleTime: utility.reactQueryTimings.generationDetail.staleTime,
                                              cacheTime: utility.reactQueryTimings.generationDetail.cacheTime});

  const renderVersionGroups = () => {
    let versionGroups = '';
    data.data.version_groups.forEach((group, index) => {
      versionGroups +=` ${group.name}${index<data.data.version_groups.length-1?',':''}`
    });
    return versionGroups;
  }

  return (
    <div className={classes.root}>
      {error && <div>Something went wrong ... try reloading (F5)</div>}
      {isLoading ? <CircularProgress className={classes.loader} /> : 
      (
        <Accordion className={classes.accordionTab} border={1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.colorWhite}/>}
            aria-controls={`${props.name}-content`}
            id={props.name}
          >
            <Typography className={classes.heading}>{props.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.infoContainer}>
              <div>
                <span className={classes.label}>Main Region: </span>
                <em>{data.data.main_region && data.data.main_region.name}</em>
              </div>
              <div>
                <span className={classes.label}>Version Groups: </span>
                <em>{renderVersionGroups()}</em>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      )}      
    </div>
  );
}

export default GenerationAccordion;
