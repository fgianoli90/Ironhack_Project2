import React, {Component} from 'react';
// import brain from './brain.gif';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TriviaGame from './TriviaGame';
import Categories from './components/Categories';
import Difficulty from './components/Difficulty';
import Game from './components/Game';
import YesNo from './components/YesNo';
import Jokes from './components/Jokes';
import Quotes from './components/Quotes';
import MainMenu from './MainMenu'



class App extends Component {
  state={
    category: "a",
    difficulty: "a",
    answerSelected: "",
    correctAnswer: "",
    countQ: 0,
    questions:[],
    score: 0,
    song: new Audio()
  }

  passLink=()=> {
    console.log("in passlink",this.state.category)
    let theLink ="";
    switch (this.state.category) {
    case "Any Category": 
      theLink= `&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Animals" : 
      theLink= `&category=27&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Cartoons" : 
      theLink= `&category=32&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "History" : 
      theLink= `&category=23&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Politics" : 
      theLink= `&category=24&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Books" : 
      theLink= `&category=10&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "General Knowledge"  : 
      theLink= `&category=9&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case "Film"  : 
      theLink= `&category=11&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Mythology": 
      theLink= `&category=20&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case   "Geography" : 
      theLink= `&category=22&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Sports" : 
      theLink= `&category=21&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case   "Music": 
      theLink= `&category=12&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Mathematics" : 
      theLink= `&category=19&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case   "Television": 
      theLink= `&category=14&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    case  "Science & Nature": 
      theLink= `&category=17&difficulty=${this.state.difficulty.toLowerCase()}`;
      break;
    default:
      theLink= `&difficulty=${this.state.difficulty.toLowerCase()}`;

  }
  console.log("the link",theLink)
  return theLink
}

 

  selectCategory=(categorySelected)=>{
    console.log("category select",categorySelected)
    this.setState({
      category: categorySelected
    })
  }
  selectDifficulty=(difficultySelected)=>{
    console.log("diff select",difficultySelected)
    this.setState({
      difficulty: difficultySelected
    })
  }
  answerSelected=(answer)=>{
    console.log("answer",answer)
    this.setState({
      answerSelected: answer
    })
  }

  correctAnswer=(correct)=>{
    console.log("correct answer",correct)
    this.setState({
      correctAnswer: correct
    })
  }

  countQuestion=(count)=>{
    console.log('count',count)
    let oneUp=this.state.countQ+count
    console.log(oneUp,this.state.countQ)
    this.setState({
      countQ: oneUp
    })
  }

  getQuestions=(questionsPassed)=>{
    this.setState({
      questions: questionsPassed
    })
  }
  
  scoreTotal=(points)=>{
    console.log("sum of score", points)
    this.setState({
      score: points
    })
  }

  sound=(s)=>{
    this.setState({
      song: s
    })
  }

  // playSound=(sound)=>{
  //   console.log('play music',sound)
  //   let music
  //   if (sound === "TG"){
  //     music = new Audio()
      
  //   }else if (sound==="JK"){
  //     music = new Audio("funny1.mp3")

  //   }else if (sound==="QS"){
  //     music = new Audio("BeautifulMusic.mp3")
      
  //   }
  //   this.setState({
  //   song:music
  //   })
    

  render(){
    console.log("App")

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props)=><MainMenu {...props} theSound={this.sound}/>}></Route>
        <Route exact path='/Jokes' render={(props)=><Jokes {...props} theSound={this.state.song}/>}></Route>
      <Route exact path='/Quotes' render={(props)=><Quotes {...props} theSound={this.state.song}/>}></Route>
        <Route exact path="/TriviaGame" render={(props)=>
          <TriviaGame 
          {...props} 
          theCategory={this.state.category} 
          theDifficulty={this.state.difficulty}
          passTheLink={this.passLink()}
          theQuestions={this.getQuestions}
          
          />
          }>
        </Route>
        <Route exact path="/components/Categories" render={(props)=>
          <Categories 
          {...props} 
          selectTheCategory={this.selectCategory}/>
          }>
        </Route>
        <Route exact path="/components/Difficulty" render={(props)=>
          <Difficulty 
          {...props} 
          selectTheDifficulty={this.selectDifficulty}/>
          }>
        </Route>
        <Route exact path="/components/Game" render={(props)=>
          <Game 
          {...props} 
          // passTheLink={this.passLink()} 
          questionProp={this.state.questions[this.state.countQ]}
          theAnswerSelected={this.answerSelected} 
          theCorrectSelected={this.correctAnswer} 
          counter={this.state.countQ}
          scoreCount={this.state.score}
          theScoreTotal={this.scoreTotal}
          />}>
        </Route>
        <Route exact path="/components/YesNo" render={(props)=>
          <YesNo 
          {...props} 
          theAnswer={this.state.answerSelected} 
          theCorrectAnswer={this.state.correctAnswer} 
          countTheQuestion={this.countQuestion} />
          }>
        </Route>
      </Switch>
    </div>
  );
  }
}
export default App;
