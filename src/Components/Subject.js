import React,{ Component } from "react";

class Subject extends Component{
    render(){
        return(
            <header>
                <h1><a href="./" 
                onClick={this.props.clicked()}
                >{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        )
    }
}
export default Subject;