import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

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
            return <div>
            <img src={this.state.responseGIF.image} alt="loading error"/><br/>
            <p>{this.props.theCorrectAnswer}</p><br/>
            <Link to="/components/Game"><button onClick={this.handleClick}>Next</button></Link>
            </div>
        } else {
            return this.componentDidMount()
        }
    }
    render() {
        console.log("inyesno",this.state.responseGIF)
        return (
            <div>
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