import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContext } from './AppContext';
import React, { useState } from 'react';
import utility from './utility';
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Berries from './components/Berries';
import Test2 from './components/Test2';
import PokemonInfo from './components/PokemonInfo';
import Error404 from './components/Error404';

function App() {
  const queryClient = new QueryClient()
  const [filter, setFilter] = useState('');
  const [berryInfo, setBerryInfo] = useState('');
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ filter, setFilter, berryInfo, setBerryInfo }}>
          <Router>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path={`${utility.appUri}`} exact component={Home} />
              <Route path={`${utility.appUri}/berries`} exact component={Berries} />
              <Route path={`${utility.appUri}/test2`} exact component={Test2} />
              <Route path={`${utility.appUri}/info/:pokemonName`} exact component={PokemonInfo} />
              {/* 404 REDIRECT */}
              <Route component={Error404} />
            </Switch>
            <Footer/>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
