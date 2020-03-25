import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import MainMenuBG from '../MainMenuBG.gif';
import {Container,Card} from 'react-bootstrap';



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
        return <Card className="card" border="primary">
                    <Card.Header className="card-header">Question {this.props.counter+1} of 10</Card.Header>
                    <Card.Body className="card-body">
                        <h3 className="card-title">{el.innerText}</h3>
                        <div className="card-text">
                            <ul className="list-group-items">{this.randomizeAnswers()}</ul>
                        </div>
                    </Card.Body>
                </Card>
        } else {
        return <Container className="GameOver">
                    <h1>GameOver</h1>
                    <p>Your final score: {this.props.scoreCount} / 10</p>
                    <button onClick={this.goBackToFirstPage}>Main Menu</button>
                </Container>
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
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>A) {a.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>B) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>C) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>D) {d.innerText}</label></div></div>
               </form>;
                break;
            case 1:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>A) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>B) {a.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>C) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>D) {d.innerText}</label></div></div>
               </form>;
                break;
            case 2:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>A) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>B) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>C) {a.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>D) {d.innerText}</label></div></div>
               </form>;
                break;
            case 3:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>A) {d.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>B) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>C) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>D) {a.innerText}</label></div></div>
               </form>;
                break;
            case 4:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>A) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>B) {d.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>C) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>D) {a.innerText}</label></div></div>
               </form>
                break;
            case 5:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>A) {d.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>B) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>C) {a.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>D) {c.innerText}</label></div></div>
               </form>
                break;
            case 6:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>A) {d.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>B) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>C) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>D) {a.innerText}</label></div></div>
               </form>
                break;
            case 7:
                answers= <form>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="c"/></Link></div><div className="multiple-choice-label"><label>A) {c.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="a"/></Link></div><div className="multiple-choice-label"><label>B) {a.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="b"/></Link></div><div className="multiple-choice-label"><label>C) {b.innerText}</label></div></div>
               <div className="multiple-choice"> <div><Link to='/components/YesNo'><input onClick={this.handleClick} type="radio" name="answerSelected" value="d"/></Link></div><div className="multiple-choice-label"><label>D) {d.innerText}</label></div></div>
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
            <Container className="Game" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover'}}>
                
                {
                    this.showQuestion()
    
                } 
                
            </Container>
        );
    }
}

export default Game;