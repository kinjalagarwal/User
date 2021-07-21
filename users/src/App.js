import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Id from './components/pages/Id';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
//import Table from 'react-bootstrap/Table'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Id" component={Id} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
