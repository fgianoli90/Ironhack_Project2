import React, { Component } from 'react';
import triviaSign from './triviaSign.gif';
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
            <div className="TriviaGame" style={{backgroundImage: `url(${triviaSign})`, backgroundSize: 'cover', height: '750px', width: '100%'}}>
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
                <div style={{color:'white'}}>
                    {!(this.props.theCategory==="a") && !(this.props.theDifficulty==="a") ? <div className="start-button"><Link to="/components/Game"><button onClick={this.handleStart}>Start</button></Link></div>: <div className="Quit"><p>Please select a Category and Difficulty Level</p><Link to="/"><button >Quit</button></Link></div>}
                </div>
            </div>
        );
    }
}

export default TriviaGame;