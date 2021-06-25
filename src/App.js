import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/Home';
import Nav from './components/Nav';
import Test1 from './components/Test1';
import Test2 from './components/Test2';


function App() {
  const appUri = '/developer-test';
  const queryClient = new QueryClient()
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Nav/>
          <Switch>
            <Route path={`${appUri}`} exact component={Home} />
            <Route path="/" exact component={Home} />
            <Route path={`${appUri}/test1`} exact component={Test1} />
            <Route path={`${appUri}/test2`} exact component={Test2} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
