import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MangaForm from './components/MangaForm';
import Manga from './components/Manga';
import data from './mangaDetails';

const BASE_URL = 'https://www.mangaeden.com/api/list/0/';
const MANGA_URL = 'https://www.mangaeden.com/api/manga/';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: '',
      mangas: [],
      mangaList: [],
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.previousView = this.previousView.bind(this);
    this.categoryResults = this.categoryResults.bind(this);
  }

  async getMangas() {
    const resp = await axios.get(BASE_URL);
    const mangas = resp.data.manga;
    this.setState({
      mangas: mangas
    });
  }

  async handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      mangaList: [],
      [name]: value
    });
  }

  async categoryResults(e) {
    await this.handleChange(e);
    const results = [];
    let category;
    let name;
    for (let i = 0; i < 10; i++) {
      category = data.manga[i].categories;
      for (let j = 0; j < category.length; j++) {
        name = data.manga[i].title;
        if (category[j].toLowerCase() === this.state.category) {
          results.push(name)
          this.setState({
            view: 'manga',
            mangaList: results
          });
        }
      }
    }
  }

  async componentDidMount() {
    this.getMangas();
  }

  previousView() {
    this.setState({
      view: 'home'
    });
  }

  renderView() {
    switch(this.state.view) {
      case 'home':
        return <MangaForm
          handleChange={this.handleChange}
          categoryResults={this.categoryResults}
          manga={this.state.manga}/>
        break;
      case 'manga':
        return <Manga
          mangaList={this.state.mangaList}
          previousView={this.previousView}
        />
        break;
      default:
        return <MangaForm
          handleChange={this.handleChange}
          categoryResults={this.categoryResults}
          manga={this.state.manga}/>
        break;
    }
  }


  render() {
    return (
      <div className="App">
        {this.renderView()}
      </div>
    );
  }
}

export default App;
