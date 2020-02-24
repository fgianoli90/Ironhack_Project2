import React, { Component } from 'react';
import triviaSign from './triviaSign.gif';
import {Link} from 'react-router-dom';
import axios from 'axios'

class Home extends Component {
    state={
        questions:[]
    }

    componentDidMount(){
        axios.get(`https://opentdb.com/api.php?amount=10${this.props.passTheLink}`).then(res=>{
        console.log(res.data)
        this.setState ({
            questions: res.data.results,
            // ready: true
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
            <div className="Home">
                <img src={triviaSign} className="trivia-Sign" alt="trivia"/>
                <div className="ButtonsHome">
                    <button>
                        <Link to="/components/Categories">{this.props.theCategory === "a" ? ("Category"): this.props.theCategory}</Link>
                    </button>
                    
                    <button>
                        <Link to="/components/Difficulty">{this.props.theDifficulty === "a" ? ("Difficulty Level"): this.props.theDifficulty}</Link>
                    </button>
                </div><br/>
                <div>
                    {!(this.props.theCategory==="a") && !(this.props.theDifficulty==="a") ? <Link to="/components/Game"><button onClick={this.handleStart}>Start</button></Link>: ("Please select a Category and Difficulty Level")}
                </div>
            </div>
        );
    }
}

export default Home;