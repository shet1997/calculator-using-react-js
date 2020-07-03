import React, { Component } from 'react';
import Calculate from './calculate';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <Calculate />   
          </div> 
        </div>
      </React.Fragment>
    );
  }
}

export default App;
