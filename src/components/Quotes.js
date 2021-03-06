import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import quotesImage from '../quotesImage.jpg';
import QMeme from './QMeme';
import {Container,Card} from 'react-bootstrap';



class Quotes extends Component {
    state={
        quote:{},
        ready: false,
        tag: ""
    }
    componentDidMount(){
        Axios.get(`https://favqs.com/api/quotes/${this.randomQuote()}`,{headers: {Authorization: 'Token token="98bcbd31c95e442861903a9f53c96236"', ContentType: 'application/json'}}).then(res=>{
        console.log('compdidmount quote',res.data)   
        this.setState({
                quote: res.data,
                ready:true,
                
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
    handleClickEnd=(music)=>{
        music.pause();
        music.currentTime=0
        console.log('stopmusic', music,music.currentTime);
    }
    handleClick=()=>{
        this.componentDidMount();
        this.getTag()
        
        // window.location.reload()
    }
    randomQuote=()=>{
        let x = Math.floor(Math.random()*50000)
        return x
    }
    getTag=()=>{
        let tagword = ""
        if (this.state.ready){
            tagword=this.state.quote.tags[Math.floor(Math.random()*this.state.quote.tags.length)]
        } else {
            tagword="inspirational"
        }
        console.log('tag in get tag', tagword)
        console.log('quote in get tag',this.state.quote)
        return <QMeme propTag={tagword} quote={this.state.quote}/>
    }

    
    render() { 
        let music=this.props.theSound
        music.play()
        return (
            <Container className="Quotes" style={{backgroundImage: `url(${quotesImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            
            {this.state.ready ?
              
            <Card border="primary">
                <Card.Body className="card-text">
                <h1>{this.state.quote.body}</h1>
                <h3 className='card-title'><i>- {this.state.quote.author}</i></h3>
                </Card.Body>
                
                {this.getTag()}
                <Card.Link className="quote-btns glow-button">
                    <div><Link to="/"><button onClick={()=>this.handleClickEnd(music)}>Return to Main Menu</button></Link></div>
                    <div><button onClick={this.handleClick}>Another Quote</button></div>
                </Card.Link>
                
            </Card>
            :
            ("Loading")
            }
            
                
            </Container>
        );
    }
}

export default Quotes;