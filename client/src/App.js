import React from 'react';
import { Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Project from './components/Project';

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
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/projects">Projects</Link>
        </nav>
        <h1>Herrow World</h1>

        <Route 
        exact
        path='/projects' 
        render={props =>
        <Projects
        {...props}
        projects={this.state.projects}
        /> }
        />

        <Route 
        path='/projects/:id' 
        render={props => 
        <Project 
        {...props}
        />
        }
        />

      </div>

    );
  }
}

export default App;
