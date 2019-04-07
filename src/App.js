import React, { Component } from "react";
import Image from "./components/Image";
import Header from './components/Header'
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Cats from "./cats";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    Cats,
    score: 0,
    clicked: [],
    message: "Click to play"
  };

  //shuffles the cat pictures when clicked
  handleClick = id => {

    let clicked = this.state.clicked;

    if(clicked.includes(id)){
      this.setState({ clicked: [], score: 0, message:  "You clicked a cat twice! Try again!" });
      return;

    }

    else if (clicked.length === Cats.length){
      this.setState({score: Cats.length, message: "You clicked all the cats", clicked: []});
      console.log('You Win');
      return;
    }
    
    else clicked.push(id)

      this.setState({ Cats, clicked, score: 0, message: " " });

      for (let i = Cats.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Cats[i], Cats[j]] = [Cats[j], Cats[i]];
      }
    }

  // Map over this.state.cards and render an image component for each cat object
  render() {
    return (
      <div className="App">
        <Header />
        <Score score={this.state.score}
               goal= {Cats.length}
               message={this.state.message}
               />
        <Wrapper>
          {this.state.Cats.map(cat => (
            <Image
              onClick={()=> this.handleClick(cat.id)}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;