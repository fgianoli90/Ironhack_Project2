import React, { Component } from 'react';
import MainMenuBG from './MainMenuBG.gif';
import {Link} from 'react-router-dom';
import axios from 'axios'

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
            <div className="TriviaGame" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover', height: '750px', width: '100%'}}>
                {this.state.ready ?
                <div className="ButtonsHome">
                    <Link to="/components/Categories">
                        <button>{this.props.theCategory === "a" ? ("Category"): this.props.theCategory}</button>
                    </Link>
                    
                    <Link to="/components/Difficulty">
                        <button>{this.props.theDifficulty === "a" ? ("Difficulty Level"): this.props.theDifficulty}</button>
                    </Link>
                </div>
                :
                ("Loading...")
                }
                {/* <h1>Let's Play Trivia!</h1> */}
                <div style={{color:'white'}}>
                    {!(this.props.theCategory==="a") && !(this.props.theDifficulty==="a") ? <div className="start-button"> <h1>Let's Play Trivia!</h1><Link to="/components/Game"><button onClick={this.handleStart}>Start</button></Link></div>: <div className="Quit"><p style={{marginBottom:'0'}}>Please select a Category and Difficulty Level</p><h1 style={{marginTop:'10px'}}>Let's Play Trivia!</h1><Link to="/"><button >Quit</button></Link></div>}
                </div>
            </div>
        );
    }
}

export default TriviaGame;