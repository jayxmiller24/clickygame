import React from 'react';
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Scoreboard from './components/ScoreBoard';
import FriendCard from "./components/FriendCard"
import GameOver from './components/GameOver';
import Jumbotron from './components/Jumbotron'
import "./App.css";





class App extends React.Component {
  randomChars = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  shuffleChars = () => {
    let shuffled = this.randomChars(friends);
    this.setState({ chars: shuffled });
  }



  increment = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      msg: 'You guessed correctly!'
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    if (newScore === 12) {
      this.setState({
        msg: 'You win!',
        selected: [],
        gameover: true
      });
    }
    this.shuffleChars();
  };

  reset = () => {
    setTimeout(() => {
      this.setState({
        msg: 'Click any character to begin',
        score: 0,
        highScore: this.state.highScore,
        selected: [],
        gameover: false,
        countdown: 3
      });
      this.shuffleChars()
    }, 4000);
  }

  handleClick = (id) => {
    if (!this.state.gameover) {
      if (this.state.selected.indexOf(id) === -1) {
        this.increment();
        this.setState({ selected: [...this.state.selected, id] });
      } else {
        this.setState({ msg: 'GAME OVER', gameover: true })
        this.reset();
        setTimeout(() => {
          this.setState({ countdown: 3 });
        }, 1000)
        setTimeout(() => {
          this.setState({ countdown: 2 });
        }, 2000)
        setTimeout(() => {
          this.setState({ countdown: 1 });
        }, 3000)
      }
    } else {
      this.setState({
        msg: 'Click any character to begin',
        selected: [],
        score: 0,
        gameover: false
      });
    }
  }
  state = {
    msg: 'Click any character to begin',
    score: 0,
    highScore: 0,
    friends: friends,
    selected: [],
    gameover: false,
    countdown: '',
  }



  render() {
    if (!this.state.gameover) {
      return (
        <div>
          <NavBar />
          <Jumbotron />
          <Wrapper>

            <Scoreboard
              msg={this.state.msg}
              score={this.state.score}
              highScore={this.state.highScore}
            />

            {

              this.state.friends.map(friend => (

                <FriendCard
                  key={friend.id}
                  id={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location= {friend.location}

                  shuffleChars={this.shuffleChars}
                  handleClick={this.handleClick}
                  increment={this.increment}
                  reset={this.reset}
                />
              ))

            }

          </Wrapper>
        </div>
      )
    } else {
      return (
        <div>
        <NavBar />
        <Jumbotron />
        <Wrapper>
          <Scoreboard
            msg={this.state.msg}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <div className="container">
            <GameOver
              msg={this.props.msg}
              score={this.state.score}
              gameover={this.state.gameover}
              countdown={this.state.countdown}
              handleClick={this.handleClick}
              reset={this.reset}
            />
          </div>
        </Wrapper>
        </div>

      )
    }
  }
}



export default App;
