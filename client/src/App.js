import React, { Component } from 'react';
import './App.css';
import PlayerCard from './components/playerCard';
import axios from 'axios';
import Navbar from './components/navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }


  async componentDidMount() {
    console.log('App: cDM called');
    try {
      const PlayerData = await axios.get(
        "http://localhost:5000/api/players"
      );
      this.setState({
        players: PlayerData.data,
      })
    } catch(err) {
      console.log('error', err);
    }
  };



  render () {
     console.log(this.state.players);

     return (
     <header className = "App-header">
       <Navbar />
       <PlayerCard players = {this.state.players} />
     </header>
     )
  };
}


export default App;
