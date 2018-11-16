import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MangaForm from './components/MangaForm';
import MangaList from './components/MangaList';

const BASE_URL = 'https://www.mangaeden.com/api/list/0/';
const MANGA_URL = 'https://www.mangaeden.com/api/manga/';
const categoryArray = [];

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
    this.loop = this.loop.bind(this);
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
    console.log(`this is the url ${manga}`);
    console.log(`getting manga details`);
    this.setState({
      mangaList: [...this.state.mangaList,manga],
    });
    console.log(`manga list ${this.state.mangaList}`);
  }

  async loop() {
    let max = 5;
    for (let i = 0; i < max; i++) {
      await this.getMangaDetails(this.state.categoryResults[i]);
      console.log(`iteration: ${i}`);
    }
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
    // console.log(results);
    this.setState({
      categoryResults: results
    });
    this.loop();
    console.log(`results array: ${this.state.categoryResults}`);
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

        <MangaList
          mangaList={this.state.mangaList}
        />
      </div>
    );
  }
}

export default App;
