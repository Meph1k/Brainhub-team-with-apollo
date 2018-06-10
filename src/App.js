import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import BrainhubWorkers from './components/BrainhubWorkers/BrainhubWorkers';
import BrainhubWorker from './components/BrainhubWorker/BrainhubWorker';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/team" component={BrainhubWorkers}/>
          <Route path="/teamMember/:id" component={BrainhubWorker} />
        </div>
      </Router>
    );
  }
}

export default App;
