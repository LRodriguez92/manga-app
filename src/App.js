import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mangas: []
    }
  }

  async getMangas() {
    const resp = await axios.get('https://www.mangaeden.com/api/list/0/');
    const mangas = resp.data.manga;
    console.log(mangas);
  }

  async componentDidMount() {
    this.getMangas();
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
