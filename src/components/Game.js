import React, { Component } from 'react';
import { Link} from 'react-router-dom';

// import Axios from 'axios';

class Game extends Component {
    // state={
    //     questions:[],
    //     ready: false,
    //     i: 1
    // }
    
    // componentDidMount(){
    //     console.log("whatever")
    //     Axios.get(`https://opentdb.com/api.php?amount=10${this.props.passTheLink}`).then(res=>{
    //         this.setState ({
    //         questions: res.data.results,
    //         ready: true

    //     })
    //   })
    // }

    handleClick=(e)=>{
        let answerIs=""
        let rightAnswer=this.props.questionProp.correct_answer
        if (e.target.value === "a" || e.target.value===rightAnswer){
            answerIs="yes"
        } else {
            answerIs="no"
        }
        this.props.theAnswerSelected(answerIs)
        this.props.theCorrectSelected(rightAnswer)
        // this.props.counter(this.state.i)
        // this.setState({
           
        //     i: this.state.i + 1
        //     })
    }

    showQuestion=()=>{
        if (this.props.counter<=9){
            var el =document.createElement('span');
            el.innerHTML=this.props.questionProp.question
        return <div><p>{el.innerText}</p><br/><ul><Link to='/components/YesNo'>{this.randomizeAnswers()}</Link></ul></div>
        } else {
        return "GameOver"
        }
    }

    randomizeAnswers=()=>{
        let a= this.props.questionProp.correct_answer;
        let b= this.props.questionProp.incorrect_answers[0];
        let c= this.props.questionProp.incorrect_answers[1];
        let d= this.props.questionProp.incorrect_answers[2];
        let answers=""
        let randomNumber=Math.floor(Math.random()*8)
        if (this.props.questionProp.type==="boolean"){ randomNumber=8}
        switch (randomNumber){
            case 0:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>A. {a}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>B. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>C. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>D. {d}</label><br/></form>;
                break;
            case 1:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>A. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>B. {a}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>C. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>D. {d}</label><br/></form>;
                break;
            case 2:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>A. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>B. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>C. {a}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>D. {d}</label><br/></form>;
                break;
            case 3:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>A. {d}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>B. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>C. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>D. {a}</label><br/></form>;
                break;
            case 4:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>A. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>B. {d}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>C. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>D. {a}</label><br/></form>;
                break;
            case 5:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>A. {d}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>B. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>C. {a}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>D. {c}</label><br/></form>;
                break;
            case 6:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>A. {d}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>B. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>C. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>D. {a}</label><br/></form>;
                break;
            case 7:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/><label>A. {c}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/><label>B. {a}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/><label>C. {b}</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/><label>D. {d}</label><br/>
                </form>;
                break;
            case 8:
                answers= <form>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="true"/><label>True</label><br/>
                <input onClick={this.handleClick} type="radio" name="answerSelected" value="false"/><label>False</label><br/>
                </form>;
                break;
            default: answers=("Error");break;
        }
        return answers;
        
    }

    render() {
        console.log("render Game")
        return (
            <div>
                {
                    this.showQuestion()
    
                } 
            </div>
        );
    }
}

export default Game;