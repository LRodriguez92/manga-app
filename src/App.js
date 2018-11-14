import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MangaForm from './components/MangaForm';
import MangaList from './components/MangaList';

const BASE_URL = 'https://www.mangaeden.com/api/list/0/';
const MANGA_URL = 'https://www.mangaeden.com/api/manga/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mangas: [],
      mangaList: [],
      manga: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async getMangas() {
    const resp = await axios.get(BASE_URL);
    const mangas = resp.data.manga;
    this.setState({
      mangas: mangas
    });
    console.log(this.state.mangas);
  }

  seeMangas() {
    const mangas = this.state.mangas;
    let i = 0;
    let max = 10;
    mangas.map(manga => {
      while (i < max) {
        console.log(`manga: ${manga.t}`);
        i++;
        return;
      }
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(`Manga text is: ${this.state.manga}`);
    console.log(`Category is: ${this.state.category}`);
  }

  async componentDidMount() {
    this.getMangas();
  }


  render() {
    return (
      <div className="App">
        <MangaForm handleChange={this.handleChange} manga={this.state.manga}/>
        {/* TODO: change mangas to mangalist */}
        <MangaList mangas={this.state.mangas} category={this.state.category}/>
        {/* {this.seeMangas()} */}
      </div>
    );
  }
}

export default App;
