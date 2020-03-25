import React, { Component } from 'react';
import MainMenuBG from './MainMenuBG.gif';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container,Row,Col,Button} from 'react-bootstrap'

class TriviaGame extends Component {
    state={
        questions:[],
        ready: false
    }

    componentDidMount(){
        axios.get(`https://opentdb.com/api.php?amount=10${this.props.passTheLink}`).then(res=>{
        console.log(res.data)
        this.setState ({
            questions: res.data.results,
            ready: true
        })
      })
    }
    handleStart=()=>{
        console.log("start button clicked", this.state.questions)
        this.props.theQuestions(this.state.questions)
    }
    render() {
        console.log("Home")
        return (
            <Container className="TriviaGame" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover'}}>
                {this.state.ready ?
                <Row className="ButtonsHome">
                    <Col xs={6} md={4}>
                    <Link to="/components/Categories">
                        <Button>{this.props.theCategory === "a" ? ("Category"): this.props.theCategory}</Button>
                    </Link>
                    </Col>
                    <Col xs={6} md={4}>
                    <Link to="/components/Difficulty">
                        <Button>{this.props.theDifficulty === "a" ? ("Difficulty Level"): this.props.theDifficulty}</Button>
                    </Link>
                    </Col>
                </Row>
                :
                ("Loading...")
                }
                
                <Row style={{color:'white'}}>
                    {!(this.props.theCategory==="a") && !(this.props.theDifficulty==="a") ? <Col className="start-button"><Link to="/components/Game"><Button onClick={this.handleStart}>Start</Button></Link><h1>Let's Play Trivia!</h1></Col>: <Col className="Quit"><h1 style={{margin:'auto 0'}}>Let's Play Trivia!</h1><p style={{marginBottom:'3rem'}}>Please select a Category and Difficulty Level</p><Link to="/"><Button >Quit</Button></Link></Col>}
                </Row>
                
            </Container>
        );
    }
}

export default TriviaGame;