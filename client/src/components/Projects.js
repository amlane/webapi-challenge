import React from 'react';

class Projects extends React.Component{
    constructor(props){
        super(props);
    
    }


    render(){
        return (
            <div>
                {this.props.projects.map( project => {
                    return (
                        <p>{project.name}</p>
                    ) 
                })}
            </div>
        )
    }
}

export default Projects;