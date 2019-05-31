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
          this.setState({ 
            projects: res.data
          })
        })
        .catch()      
      }

  render(){
    return (
      <div className="App">
        <h1>Herrow World</h1>
        {this.state.projects.map( project => {
          return (
            <p>{project.name}</p>
          )
        })}
      </div>
    );
  }
}

export default App;
