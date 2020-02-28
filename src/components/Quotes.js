import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import quotesImage from '../quotesImage.jpg';
import QMeme from './QMeme';


class Quotes extends Component {
    state={
        quote:{},
        ready: false,
    }
    componentDidMount(){
        Axios.get(`https://favqs.com/api/quotes/${this.randomQuote()}`,{headers: {Authorization: 'Token token="98bcbd31c95e442861903a9f53c96236"', ContentType: 'application/json'}}).then(res=>{
        console.log('compdidmount',res.data)   
        this.setState({
                quote: res.data,
                ready:true
            })
        })
        
        
        // console.log("in here bitch")
        // Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OgrRSkOHO9ZflUwt9XsExnGlZOxkLqOs&q=${this.getTag()}&limit=10&offset=0&rating=PG-13&lang=en`).then(res=>{
        //   console.log("images",res.data.data)    
        //     this.setState({
        //         memes: res.data.data,
        //         ready:true
        //     })
        // })
       
        
    }
    handleClick=()=>{
        this.componentDidMount()
        // window.location.reload()
    }
    randomQuote=()=>{
        let x = Math.floor(Math.random()*50000)
        return x
    }
    getTag=()=>{
        let tag = ""
        if (this.state.ready){
            tag=this.state.quote.tags[Math.floor(Math.random()*this.state.quote.tags.length)]
        } else {
            tag="inspirational"
        }
        console.log('tag', tag)
        console.log('quote',this.state.quote)
        return tag
    }

    
    render() { 
        return (
            <div>
            
            {this.state.ready ?
              <div className="Quotes" style={{backgroundImage: `url(${quotesImage})`, backgroundSize: 'cover', height: '800px', width: '100%'}}>
                <div className="headers">
                <h1>{this.state.quote.body}</h1>
                <h3><i>- {this.state.quote.author}</i></h3>
                </div>
                
                <QMeme propTag={this.getTag()} quote={this.state.quote}/>
                {/* <img src={`https://media.giphy.com/media/${this.randomMeme()}/giphy.gif`} alt="Meme Error" /> */}
                {/* <h2>{this.showPunchline()}</h2> */}
                
                <div className="quote-btns glow-button">
                    <button onClick={this.handleClick}>Another Quote</button>
                    <Link to="/"><button>Return to Main Menu</button></Link>
                </div>
                
            </div>
            :
            ("Loading")
            }
            
                
            </div>
        );
    }
}

export default Quotes;