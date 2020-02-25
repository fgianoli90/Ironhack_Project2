import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import AnswerImage from '../AnswerImage.jpg'

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
        if(this.state.responseGIF.answer===this.props.theAnswer){
            return <div className="card" style={{ width: '22rem',backgroundColor:'white', padding:'20px 0' }}>
            <h1 className="card-header">{this.props.theAnswer.toUpperCase()}</h1>
            <img className="card-img" variant="top" src={this.state.responseGIF.image} alt="loading error"/>
            <p className="card-title">The correct answer is: <br/><b>{this.props.theCorrectAnswer}</b></p>
            <div className="card-link"><Link to="/components/Game"><button className="next-btn" onClick={this.handleClick}>Next</button></Link></div>
            </div>
        } else {
            return this.componentDidMount()
        }
    }
    render() {
        console.log("inyesno",this.state.responseGIF)
        return (
            <div className="YesNo" style={{backgroundImage: `url(${AnswerImage})`, backgroundSize: 'cover', height: '810px', width: '100%'}}>
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