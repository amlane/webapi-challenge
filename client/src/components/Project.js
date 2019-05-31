import React from 'react';
import axios from 'axios';

class Project extends React.Component{
    state = {
        id: this.props.match.params.id,
        project: this.props.match.params.name,
        actions: []
    }

    componentDidMount(){
        axios
        .get(`http://localhost:7000/api/projects/${this.state.id}`)
        .then(res => {
            console.log("project:", res.data.actions)
            this.setState({ 
                actions: res.data.actions
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        console.log("state", this.state.project)
        return (
            <div>
                <h2>{this.state.project}</h2>
                {this.state.actions.map( action => {
                    return (
                        <p>{action.description}</p>
                    )
                } )}
            </div>
        )
    }
}

export default Project;