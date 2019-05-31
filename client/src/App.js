import React from 'react';

import axios from 'axios';
import './App.css';

class App extends React.Component{
      state = {
        projects: []
      }

      componentDidMount(){
        axios
        .get(`http://localhost:7000/api/projects`)
        .then(res => {
          console.log(res)
        })
        .catch()      
      }

  render(){
    return (
      <div className="App">
        <h1>Herrow World</h1>
      </div>
    );
  }
}

export default App;
