import React, { Component } from 'react';
import  {Link } from 'react-router-dom';

class Difficulty extends Component {
    handleClick=(e)=>{
        // console.log(e)
        let difficulty = e.target.value
        // console.log(difficulty)
        this.props.selectTheDifficulty(difficulty)
        
    }
    render() {
        console.log("Difficulty")
        return (
            <div className="difficulty-level">
            <header><h1>Select a Difficulty Level</h1></header>
            <div className="difficulty-buttons">                    
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Easy" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Medium" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Hard" /></Link>
            </div>
            </div>
        );
    }
}

export default Difficulty;