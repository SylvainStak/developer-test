import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContext } from './AppContext';
import React, { useState } from 'react';
import constants from './constants';
import Home from './components/Home';
import Nav from './components/Nav';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import PokemonInfo from './components/PokemonInfo';
import Footer from './components/Footer';

function App() {
  const queryClient = new QueryClient()
  const [filter, setFilter] = useState('');
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ filter, setFilter }}>
          <Router>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path={`${constants.appUri}`} exact component={Home} />            
              <Route path={`${constants.appUri}/test1`} exact component={Test1} />
              <Route path={`${constants.appUri}/test2`} exact component={Test2} />
              <Route path={`${constants.appUri}/info/:pokemonName`} exact component={PokemonInfo} />
            </Switch>
            <Footer/>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
