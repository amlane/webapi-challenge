import React from 'react';
import axios from 'axios';

class Project extends React.Component{
    state = {
        id: this.props.match.params.id,
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
        console.log("state", this.state.actions)
        return (
            <div>
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