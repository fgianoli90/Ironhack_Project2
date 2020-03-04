import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import MainMenuBG from '../MainMenuBG.gif';


class Game extends Component {
    
    handleClick=(e)=>{
        let answerIs=""
        let points=this.props.scoreCount
        let rightAnswer=this.props.questionProp.correct_answer
        if (e.target.value === "a" || e.target.value===rightAnswer){
            answerIs="yes"
            points = points+1
        } else {
            answerIs="no"
        }
        this.props.theAnswerSelected(answerIs)
        this.props.theCorrectSelected(rightAnswer)
        this.props.theScoreTotal(points)
    }

    showQuestion=()=>{
        console.log(this.props.questionProp)
        if (this.props.counter<=9){
            var el =document.createElement('span');
            el.innerHTML=this.props.questionProp.question
        return <div className="card" border="primary" style={{ width: '50%'}}>
                    <div className="card-header">Question {this.props.counter+1} of 10</div>
                    <div className="card-body">
                        <h3 className="card-title">{el.innerText}</h3>
                        <div className="card-text">
                            <ul className="list-group-items">{this.randomizeAnswers()}</ul>
                        </div>
                    </div>
                </div>
        } else {
        return <div className="GameOver">
                    <h1>GameOver</h1>
                    <p>Your final score: {this.props.scoreCount} / 10</p>
                    <button onClick={this.goBackToFirstPage}>Main Menu</button>
                </div>
        }
    }

    goBackToFirstPage = () => {
        window.location.href = window.origin
    }
    
    randomizeAnswers=()=>{
        var a =document.createElement('span');
        var b =document.createElement('span');
        var c =document.createElement('span');
        var d =document.createElement('span');
        a.innerHTML= this.props.questionProp.correct_answer;
        b.innerHTML= this.props.questionProp.incorrect_answers[0];
        c.innerHTML= this.props.questionProp.incorrect_answers[1];
        d.innerHTML= this.props.questionProp.incorrect_answers[2];
        let answers=""
        let randomNumber=Math.floor(Math.random()*8)
        if (this.props.questionProp.type==="boolean"){ randomNumber=8}
        switch (randomNumber){
            case 0:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>A) {a.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>B) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>C) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>D) {d.innerText}</label></div></form>;
                break;
            case 1:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>A) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>B) {a.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>C) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>D) {d.innerText}</label></div></form>;
                break;
            case 2:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>A) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>B) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>C) {a.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>D) {d.innerText}</label></div></form>;
                break;
            case 3:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>A) {d.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>B) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>C) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>D) {a.innerText}</label></div></form>;
                break;
            case 4:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>A) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>B) {d.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>C) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>D) {a.innerText}</label></div></form>;
                break;
            case 5:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>A) {d.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>B) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>C) {a.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>D) {c.innerText}</label></div></form>;
                break;
            case 6:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>A) {d.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>B) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>C) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>D) {a.innerText}</label></div></form>;
                break;
            case 7:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link><label>A) {c.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link><label>B) {a.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link><label>C) {b.innerText}</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link><label>D) {d.innerText}</label></div>
                </form>;
                break;
            case 8:
                answers= <form>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="True"/></Link><label>True</label></div>
               <div className="multiple-choice"> <Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="False"/></Link><label>False</label></div>
                </form>;
                break;
            default: answers=("Error");break;
        }
        return answers;
        
    }

    render() {
        console.log("render Game")
        return (
            <div className="Game" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover', height: '810px',width: '100%'}}>
                
                {
                    this.showQuestion()
    
                } 
                
            </div>
        );
    }
}

export default Game;