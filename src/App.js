import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContext } from './components/AppContext';
import React, { useState } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  const appUri = '/developer-test';
  const queryClient = new QueryClient()
  const [filter, setFilter] = useState('');
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ filter, setFilter }}>
          <Router>
            <Nav/>
            <Switch>
              <Route path={`${appUri}`} exact component={Home} />
              <Route path="/" exact component={Home} />
              <Route path={`${appUri}/test1`} exact component={Test1} />
              <Route path={`${appUri}/test2`} exact component={Test2} />
            </Switch>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
