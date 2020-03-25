import React, { Component } from 'react';
import  {Link } from 'react-router-dom';
import {Container,Row} from 'react-bootstrap';


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
            <Container className="diff">
            <header><h1>Select a Difficulty Level</h1></header>
            <Row className="diff-buttons">                    
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Easy" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Medium" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Hard" /></Link>
            </Row>
            </Container>
        );
    }
}

export default Difficulty;