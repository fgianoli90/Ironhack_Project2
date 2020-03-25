import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import MainMenuBG from '../MainMenuBG.gif';
import {Card} from 'react-bootstrap'

class YesNo extends Component {
    state={
        responseGIF: {},
        ready:false,
        count: 1
    }
    componentDidMount(){
        Axios.get('https://yesno.wtf/api').then(res=>{
            console.log("compdidmount yes/no",res.data)
            this.setState({
                responseGIF:res.data,
                ready:true
            })
        })
    }
    handleClick=()=>{
        console.log("yes no click count",this.state.count)
        this.props.countTheQuestion(this.state.count)
    }
    checkResponse=()=>{
        var el =document.createElement('span');
        el.innerHTML=this.props.theCorrectAnswer
        if(this.state.responseGIF.answer===this.props.theAnswer){
            return <Card className="card">
            <Card.Header>{this.props.theAnswer.toUpperCase()}</Card.Header>
            <img className="card-img" variant="top" src={this.state.responseGIF.image} alt="loading error"/>
            <Card.Text className="card-title">The correct answer is: <br/><b>{el.innerText}</b></Card.Text>
            <Link to="/components/Game"><button className="next-btn" onClick={this.handleClick}>Next</button></Link>
            </Card>
        } else {
            return this.componentDidMount()
        }
    }
    render() {
        console.log("inyesno",this.state.responseGIF)
        return (
            <div className="YesNo" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover'}}>
            {this.state.ready?
                this.checkResponse()
                :
                ("...Loading")
            }
            </div>
        );
    }
}

export default YesNo;