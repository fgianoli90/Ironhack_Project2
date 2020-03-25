import React, { Component } from 'react';
import Axios from 'axios';
import {FacebookIcon,FacebookShareButton,TwitterIcon, TwitterShareButton} from 'react-share'
import { Card } from 'react-bootstrap';


class QMeme extends Component {
    state={
        memes:[],
        ready:false,
        tag: ""
    }
    componentDidMount(){
        console.log("Q MEME COMPDIDI MPINT")
        Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OgrRSkOHO9ZflUwt9XsExnGlZOxkLqOs&q=${this.props.propTag}&limit=10&offset=0&rating=PG-13&lang=en`).then(res=>{
            this.setState({
                memes: res.data.data,
                ready: true,
                tag: this.props.propTag
            })
        })
    }
    randomMeme=()=>{
        let meme = ""
        if (this.props.propTag===this.state.tag){
            let memes= [...this.state.memes]
            meme = memes[Math.floor(Math.random()*memes.length)].id 
            
        }else{
            this.componentDidMount()
        }
        console.log('memeID',meme)
        return meme
    }
    render() {
        console.log("propTag name",this.props.propTag,this.state.tag)
        let memeURL=''
        let memeID=this.randomMeme()
        console.log('inside url meme', memeID)
        memeURL=`https://media.giphy.com/media/${memeID}/giphy.gif`
        
        return (
            <div className="QMeme">
            {this.state.ready?
                 (<Card.Img className='img-fluid' src={memeURL} alt="Meme Error" />)
                 :
                 ("Loading...")
                }
            <div className="sharelinks">
                <FacebookShareButton url={memeURL} quote={this.props.quote.body} hashtag="#Mindscapes"><FacebookIcon round={true} size={50}/></FacebookShareButton>
                <TwitterShareButton url={memeURL} title={this.props.quote.body} hashtag="#Mindscapes"><TwitterIcon round={true} size={50}/></TwitterShareButton>
            </div>
            </div>
        );
    }
}

export default QMeme;