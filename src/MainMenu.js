import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import thinkingQ from './thinkingQ.gif';
import inspire from './inspire.gif';
import laughing from './laughing.gif';
import MainMenuBG from './MainMenuBG.gif';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share';
import {Container,Row,Col,Image} from 'react-bootstrap'

// import {Sound} from 'react-sound';
// import Chill_MainMenu from './Chill_MainMenu.mp3'
let sound=new Audio("dance.mp3")


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
        sound.currentTime = 0
        let music
        if (e.target.name === "TG"){
            music = new Audio()
            music.play()
          }else if (e.target.name==="JK"){
            music = new Audio("CrowdLaughing.mp3")
            music.play()
            this.props.theSound(music)
          }else if (e.target.name==="QS"){
            music = new Audio("BeautifulMusic.mp3") 
            // music.play()
            this.props.theSound(music)
          }
        this.setState({
            playing:false
        })
    }
    render() {
    
        return (
            <Container className="Main-Menu" onMouseMove={this.handleMove} style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* className="Main-Menu"  */}
                <Row>
                    <h1>Mindscapes</h1>
                    <h3>Think ~ Laugh ~ Feel</h3>
                </Row>
               
                <Row className="list-group">
                    <Col xs={6} md={4}><Link to="./TriviaGame" className='list-group-item-action' onClick={this.handleClick} name="TG"><Image  src={thinkingQ} onClick={this.handleClick} name="TG" /><h1 onClick={this.handleClick} name="TG">Trivia</h1></Link></Col>
                    <Col xs={6} md={4}><Link to="./Jokes" className='list-group-item-action' onClick={this.handleClick} name="JK"><Image className="App-logo" src={laughing} onClick={this.handleClick} name="JK"/><h1 onClick={this.handleClick} name="JK">Jokes</h1></Link></Col>
                    <Col xs={6} md={4}><Link to="./Quotes" className='list-group-item-action' onClick={this.handleClick} name="QS"><Image   src={inspire} onClick={this.handleClick} name="QS" /><h1 onClick={this.handleClick} name="QS">Quotes</h1></Link></Col>
                </Row>
                <Row className="sharelinks">
                    <FacebookShareButton url="mindscapes.netlify.com" quote="Take a break and let your mind escape." hashtag="#Mindscapes"><FacebookIcon round={true} size={50}/></FacebookShareButton>
                    <TwitterShareButton url="mindscapes.netlify.com" title="Take a break and let your mind escape."  hashtag="#Mindscapes"><TwitterIcon round={true} size={50}/></TwitterShareButton>
                </Row>
            </Container>
        );
    }
}

export default MainMenu;