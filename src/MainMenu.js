import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import thinkingQ from './thinkingQ.gif';
import inspire from './inspire.gif';
import laughing from './laughing.gif';
import MainMenuBG from './MainMenuBG.gif';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share';
// import {Sound} from 'react-sound';
// import Chill_MainMenu from './Chill_MainMenu.mp3'
let sound=new Audio("Chill_MainMenu.mp3")


class MainMenu extends Component {
    state={
        playing: false
    }
   
    handleMove=()=>{
        if (!this.state.playing){
            sound.play()
            this.setState({
                playing: true
            })
        } 
    }
    handleClick=(e)=>{
        console.log(e.target.name)
        sound.pause()
        let music
        if (e.target.name === "TG"){
            music = new Audio()
            music.play()
          }else if (e.target.name==="JK"){
            music = new Audio("CrowdLaughing.mp3")
            console.log('shouldplay song')
            music.play()
          }else if (e.target.name==="QS"){
            music = new Audio("BeautifulMusic.mp3") 
            music.play()
          }

        
    }
    render() {
    
        return (
            <div className="Main-Menu" onMouseMove={this.handleMove} style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover', height: '800px', width: '100%'}}>
                <h1>Mindscapes</h1>
                <h3>Think ~ Laugh ~ Feel</h3>
                {/* <button onClick={() => new Audio("Chill_MainMenu.mp3").play()}>plsy</button> */}
                <div >
                <Link to="./TriviaGame" onClick={this.handleClick} name="TG"><img  height="200px" width="100px" src={thinkingQ} onClick={this.handleClick} name="TG" /><h1 onClick={this.handleClick} name="TG">Trivia</h1></Link>
                <Link to="./Jokes" onClick={this.handleClick} name="JK"><img className="App-logo" height="200px" width="100px" src={laughing} onClick={this.handleClick} name="JK"/><h1 onClick={this.handleClick} name="JK">Jokes</h1></Link>
                <Link to="./Quotes" onClick={this.handleClick} name="QS"><img  height="200px" width="100px" src={inspire} onClick={this.handleClick} name="QS" /><h1 onClick={this.handleClick} name="QS">Quotes</h1></Link>
                </div>
                <div className="sharelinks">
                <FacebookShareButton url="mindscapes.netlify.com" quote="Take a break and let your mind escape." hashtag="#Mindscapes"><FacebookIcon round={true} size={35}/></FacebookShareButton>
                <TwitterShareButton url="mindscapes.netlify.com" title="Take a break and let your mind escape."  hashtag="#Mindscapes"><TwitterIcon round={true} size={35}/></TwitterShareButton>
                </div>
                {/* <Sound url={Chill_MainMenu} loop="true" playStatus={Sound.status.PLAYING} volume={50} playFromPosition={300}/> */}
            </div>
        );
    }
}

export default MainMenu;