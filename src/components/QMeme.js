import React, { Component } from 'react';
import Axios from 'axios';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share'


class QMeme extends Component {
    state={
        memes:[],
        ready:false
    }
    componentDidMount(){
        console.log("Q MEME COMPDIDI MPINT")
        Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OgrRSkOHO9ZflUwt9XsExnGlZOxkLqOs&q=${this.props.propTag}&limit=10&offset=0&rating=PG-13&lang=en`).then(res=>{
            this.setState({
                memes: res.data.data,
                ready: true
            })
        })
    }
    randomMeme=()=>{
        let meme = ""
        let memes= [...this.state.memes]
        console.log('list of random memes',memes)
        meme = memes[Math.floor(Math.random()*memes.length)].id
        return meme
    }
    render() {
        console.log("render Q MEME",this.props.propTag)
        let memeURL=''
        if(this.state.ready){
            let memeID=this.randomMeme()
            console.log('inside url meme', memeID)
            memeURL=`https://media.giphy.com/media/${memeID}/giphy.gif`
        }
        

        return (
            <div className="QMeme">
            {this.state.ready?
                 (<img src={memeURL} alt="Meme Error" />)
                 :
                 this.componentDidMount()
                }
            <div className="sharelinks">
                <FacebookShareButton url={memeURL} quote={this.props.quote.body} hashtag="#Mindscapes"><FacebookIcon round={true} size={35}/></FacebookShareButton>
                <TwitterShareButton url={memeURL} title={this.props.quote.body} hashtag="#Mindscapes"><TwitterIcon round={true} size={35}/></TwitterShareButton>
            </div>
            </div>
        );
    }
}

export default QMeme;