import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import jokebg from '../jokebg.jpg';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share';


class Jokes extends Component {
    state={
        joke:"",
        funnies:  [],
        ready: false
    }
    componentDidMount(){

        Axios.get('https://icanhazdadjoke.com/',{headers: {Accept: 'application/json'}}).then(res=>{
           // console.log("Jokes", res.data.joke)
            this.setState({
                joke: res.data.joke
            })
        })
    
        Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OgrRSkOHO9ZflUwt9XsExnGlZOxkLqOs&q=${this.getKeyWord() }&limit=30&offset=0&rating=PG-13&lang=en`).then(res=>{
          // console.log(res.data.data)    
            this.setState({
                funnies: res.data.data,
                ready:true
            })
        })
    }

    randomFunny=()=>{
        let funnyMeme = ""
        let funnyMemes= [...this.state.funnies]
        funnyMeme = funnyMemes[Math.floor(Math.random()*funnyMemes.length)].id
        return funnyMeme
    }
    getKeyWord=()=>{
        let keyword=""
        let words=["LOL","laughing","hilarious","funny","giggling","comedy"]
        keyword=words[Math.floor(Math.random()*words.length)]
        console.log(keyword)
        return keyword
    }
    
    handleClick=()=>{
        this.componentDidMount()
        // window.location.reload()
    }

    showJoke=()=>{
        let theJoke=""
        if (this.state.joke.indexOf("!") < 0){
            if (this.state.joke.indexOf("?")<0){
                theJoke= this.state.joke.slice(0,this.state.joke.indexOf(".")+1)
            } else if (this.state.joke.indexOf(".") > this.state.joke.indexOf("?")) {
                theJoke=this.state.joke.slice(0,this.state.joke.indexOf("?")+1)
            }
            if (this.state.joke.indexOf(".")<0) {
                this.state.joke.slice(0,this.state.joke.indexOf("?")+1)
            } else if (this.state.joke.indexOf(".") < this.state.joke.indexOf("?")) {
                theJoke=this.state.joke.slice(0,this.state.joke.indexOf(".")+1)
            }
            
        } else {
            if (this.state.joke.indexOf("?")<0 && this.state.joke.indexOf(".")<0){
                theJoke= this.state.joke.slice(0,this.state.joke.indexOf("!")+1)
            } else if (this.state.joke.indexOf("?")>0){
                if (this.state.joke.indexOf("!") < this.state.joke.indexOf("?")){
                    theJoke=this.state.joke.slice(0,this.state.joke.indexOf("!")+1)
                }else{
                    theJoke=this.state.joke.slice(0,this.state.joke.indexOf("?")+1)
                }
            } else if (this.state.joke.indexOf(".")>0){
                if (this.state.joke.indexOf("!") < this.state.joke.indexOf(".")){
                    theJoke=this.state.joke.slice(0,this.state.joke.indexOf("!")+1)
                }else{
                    theJoke=this.state.joke.slice(0,this.state.joke.indexOf(".")+1)
                }
            }  
        }
        if (!this.state.joke.includes(".") && !this.state.joke.includes("?") && !this.state.joke.includes("!")){
            theJoke=this.state.joke
        }
        console.log(theJoke)
        return theJoke
    }
    showPunchline=()=>{
        let punchline=""
        if (this.state.joke.indexOf("!") < 0){

            if (this.state.joke.indexOf("?")<0){
                punchline= this.state.joke.slice(this.state.joke.indexOf(".")+1)                
            } else if (this.state.joke.indexOf(".") > this.state.joke.indexOf("?")) {
                punchline=this.state.joke.slice(this.state.joke.indexOf("?")+1)
            }
            if (this.state.joke.indexOf(".")<0) {
                this.state.joke.slice(this.state.joke.indexOf("?")+1)
            } else if (this.state.joke.indexOf(".") < this.state.joke.indexOf("?")) {
                punchline=this.state.joke.slice(this.state.joke.indexOf(".")+1)
            }
        } else {
            if (this.state.joke.indexOf("?")<0 && this.state.joke.indexOf(".")<0){
                punchline= this.state.joke.slice(this.state.joke.indexOf("!")+1)
            } else if (this.state.joke.indexOf("?")>0){
                if (this.state.joke.indexOf("!") < this.state.joke.indexOf("?")){
                    punchline=this.state.joke.slice(this.state.joke.indexOf("!")+1)
                }else{
                    punchline=this.state.joke.slice(this.state.joke.indexOf("?")+1)
                }
            } else if (this.state.joke.indexOf(".")>0){
                if (this.state.joke.indexOf("!") < this.state.joke.indexOf(".")){
                    punchline=this.state.joke.slice(this.state.joke.indexOf("!")+1)
                }else{
                    punchline=this.state.joke.slice(this.state.joke.indexOf(".")+1)
                }
            }  
        }
        if (!this.state.joke.includes(".") && !this.state.joke.includes("?") && !this.state.joke.includes("!")){
            punchline=""
        }
        console.log(punchline)
        return punchline
    }

    render() {
        let memeURL=""
        if(this.state.ready){
            let memeID= this.randomFunny()
            memeURL=`https://media.giphy.com/media/${memeID}/giphy.gif`
        }
        return (
            <div >
            {this.state.ready ?
              <div className="Jokes" style={{backgroundImage: `url(${jokebg})`, backgroundSize: 'cover', height: '800px', width: '100%'}}>
                <h1>{this.showJoke()}</h1>
                
                <img src={memeURL} alt="Funny Error" />
                <h2>{this.showPunchline()}</h2>
                <div className="sharelinks">
                <FacebookShareButton url={memeURL} quote={this.state.joke} hashtag="#Mindscapes"><FacebookIcon round={true} size={35}/></FacebookShareButton>
                <TwitterShareButton url={memeURL} title={this.state.joke} hashtag="#Mindscapes"><TwitterIcon round={true} size={35}/></TwitterShareButton>
                </div>
                <div className="joke-btns glow-button">
                    <button onClick={this.handleClick}>Another Joke</button>
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

export default Jokes;