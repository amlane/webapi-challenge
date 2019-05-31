import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component{
    constructor(props){
        super(props);
    
    }


    render(){
        return (
            <div>
                {this.props.projects.map( project => {
                    return (
                        <Link to={`/projects/${project.id}`}><p>{project.name}</p></Link>
                    ) 
                })}
            </div>
        )
    }
}

export default Projects;