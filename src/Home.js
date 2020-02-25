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
            <div className="Home" style={{backgroundImage: `url(${triviaSign})`, backgroundSize: 'cover', height: '750px', width: '100%'}}>
                {/* <img src={triviaSign} className="trivia-Sign" alt="trivia"/> */}
                <div className="ButtonsHome">
                    <Link to="/components/Categories">
                        <button>{this.props.theCategory === "a" ? ("Category"): this.props.theCategory}</button>
                    </Link>
                    
                    <Link to="/components/Difficulty">
                        <button>{this.props.theDifficulty === "a" ? ("Difficulty Level"): this.props.theDifficulty}</button>
                    </Link>
                </div><br/>
                <div className="start-button" style={{color:'white'}}>
                    {!(this.props.theCategory==="a") && !(this.props.theDifficulty==="a") ? <Link to="/components/Game"><button onClick={this.handleStart}>Start</button></Link>: ("Please select a Category and Difficulty Level")}
                </div>
            </div>
        );
    }
}

export default Home;