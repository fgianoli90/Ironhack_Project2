import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import thinkingQ from './thinkingQ.gif';
import inspire from './inspire.gif';
import laughing from './laughing.gif';
import MainMenuBG from './MainMenuBG.gif';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share'



class MainMenu extends Component {
    render() {
        return (
            <div className="Main-Menu" style={{backgroundImage: `url(${MainMenuBG})`, backgroundSize: 'cover', height: '800px', width: '100%'}}>
                <h1>Mindscapes</h1>
                <h3>Think ~ Laugh ~ Feel</h3>
                <div>
                <Link to="./TriviaGame" ><img  height="200px" width="100px" src={thinkingQ} /><h1>Trivia</h1></Link>
                <Link to="./Jokes"><img className="App-logo" height="200px" width="100px" src={laughing}/><h1>Jokes</h1></Link>
                <Link to="./Quotes" ><img  height="200px" width="100px" src={inspire} /><h1>Quotes</h1></Link>
                </div>
                <div className="sharelinks">
                <FacebookShareButton url={window.origin} quote="Take a break and let your mind escape." hashtag="#Mindscapes"><FacebookIcon round={true} size={35}/></FacebookShareButton>
                <TwitterShareButton url={window.origin} title="Take a break and let your mind escape."  hashtag="#Mindscapes"><TwitterIcon round={true} size={35}/></TwitterShareButton>
                </div>
            </div>
        );
    }
}

export default MainMenu;