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
      mangaSearch: '',
      category: '',
      categoryResults: [],
      title: '',
      imageURL: '',
      released: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.getMangaDetails = this.getMangaDetails.bind(this);
    this.categoryResults = this.categoryResults.bind(this);
  }

  async getMangas() {
    const resp = await axios.get(BASE_URL);
    const mangas = resp.data.manga;
    this.setState({
      mangas: mangas
    });
    console.log(this.state.mangas);
  }

  async getMangaDetails(i) {
    const resp = await axios.get(`${MANGA_URL}${i}`)
    const manga = resp.data;
    console.log(`what I want in mangaList ${manga}`);
    this.setState({
      mangaList: manga,
      title: manga.title,
      imageURL: manga.imageURL,
      released: manga.released,
      description: manga.description
    });
  }

  async handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    // console.log(`Manga text is: ${this.state.manga}`);
    // console.log(`Category is: ${this.state.category}`);
  }

  async categoryResults(e) {
    const results = [];
    await this.handleChange(e);
    this.state.mangas.map(manga => {
      manga.c.filter(cat => {
        if (cat.toLowerCase() === this.state.category) {
          results.push(manga.i)
        }
      });
    });
    console.log(results);
    this.setState({
      categoryResults: results
    });
    console.log(`results array: ${results}`);
  }

  async componentDidMount() {
    this.getMangas();
  }


  render() {
    return (
      <div className="App">
        <MangaForm
          handleChange={this.handleChange}
          categoryResults={this.categoryResults}
          manga={this.state.manga}/>
        {/* TODO: change mangas to mangalist */}
        <MangaList
          mangas={this.state.mangas}
          mangaList={this.state.mangaList}
          categoryResults={this.state.categoryResults}
          getMangaDetails={this.getMangaDetails}
          title={this.state.title}
          imageURL={this.state.imageURL}
          released={this.state.released}
          description={this.state.description}
        />
        {/* {console.log(`title: ${this.state.title}`)}
        {console.log(`imageURL: ${this.state.imageURL}`)}
        {console.log(`released: ${this.state.released}`)}
        {console.log(`description: ${this.state.description}`)} */}
      </div>
    );
  }
}

export default App;
