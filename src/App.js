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
      // mangaSearch: '',
      category: ''
      // categoryResults: [],
      // title: '',
      // imageURL: '',
      // released: '',
      // description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    // this.getMangaDetails = this.getMangaDetails.bind(this);
    this.categoryResults = this.categoryResults.bind(this);
    // this.loop = this.loop.bind(this);
  }

  // async getMangas() {
  //   const resp = axios.get(BASE_URL).then(mangas => {
  //     console.log(mangas.data.manga);
  //     const manga = mangas.data.manga;
  //     console.log(`you get back ${manga[0]}`);
  //     for (let i = 0; i < 2; i++) {
  //       const response = axios.get(`${MANGA_URL}${manga[i]}`)
  //         // let data = info.data;
  //         console.log(`This is the response ${response}`);
  //     }
  //   })
  // }


  async getMangas() {
    const resp = await axios.get(BASE_URL);
    const mangas = resp.data.manga;
    this.setState({
      mangas: mangas
    });
    console.log(this.state.mangas);
  }

  // async getMangaDetails(i) {
  //   const resp = await axios.get(`${MANGA_URL}${i}`)
  //   const manga = resp.data;
  //   console.log(`this is the url ${manga}`);
  //   console.log(`getting manga details`);
  //   this.setState({
  //     mangaList: [...this.state.mangaList,manga],
  //   });
  //   console.log(`manga list ${this.state.mangaList}`);
  // }

  // async loop() {
  //   await this.state.categoryResults.map(result => {
  //    this.getMangaDetails(result);
  //   })
  // }

  // async loop() {
  //   let max = 5;
  //   for (let i = 0; i < max; i++) {
  //     await this.getMangaDetails(this.state.categoryResults[i]);
  //     console.log(`iteration: ${i}`);
  //   }
  // }

  async handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      mangaList: [],
      [name]: value
    });
    // console.log(`Manga text is: ${this.state.manga}`);
    // console.log(`Category is: ${this.state.category}`);
  }

  // getMangaDetails() {
  //   for (let i = 0; i < this.state.mangaList.length; i++) {
  //     let title = this.state.mangaList.manga[i].title;
  //     console.log(`Manga title ${title}`);
  //     for (let j = 0; j < category.length; j++) {
  //       string = data.manga[i].i;
  //       if (category[j].toLowerCase() === this.state.category) {
  //         results.push(string)
  //         console.log(`it matches`);
  //         console.log(string);
  //       }
  //     }
  //   }
  // }

  async categoryResults(e) {
    await this.handleChange(e);
    const results = [];
    let category;
    let name;
    for (let i = 0; i < 10; i++) {
      category = data.manga[i].categories;
      console.log(`categories: ${category}`);
      for (let j = 0; j < category.length; j++) {
        name = data.manga[i].title;
        if (category[j].toLowerCase() === this.state.category) {
          results.push(name)
          console.log(`it matches`);
          console.log(name);
          this.setState({
            view: 'manga',
            mangaList: results
          }, console.log(this.state.mangaList));
        } else {
          console.log('NOT FOUND');
        }
      }
    }
  }

  // async categoryResults(e) {
  //   await this.handleChange(e);
  //   const results = [];
  //   let category;
  //   let name;
  //   for (let i = 0; i < 10; i++) {
  //     category = data.manga[i].c;
  //     for (let j = 0; j < category.length; j++) {
  //       name = data.manga[i].t;
  //       if (category[j].toLowerCase() === this.state.category) {
  //         results.push(name)
  //         console.log(`it matches`);
  //         console.log(name);
  //         this.setState({
  //           mangaList: results
  //         }, console.log(this.state.mangaList));
  //       }
  //     }
  //   }
  // }

  // async categoryResults(e) {
  //   const results = [];
  //   await this.handleChange(e);
  //   this.state.mangas.map(manga => {
  //     manga.c.filter(cat => {
  //       if (cat.toLowerCase() === this.state.category) {
  //         results.push(manga.i)
  //       }
  //     });
  //   });
  //   // console.log(results);
  //   this.setState({
  //     categoryResults: results
  //   });
  //   this.loop();
  //   console.log(`results array: ${this.state.categoryResults}`);
  // }

  async componentDidMount() {
    this.getMangas();
  }

  renderView() {
    switch(this.state.view) {
      case 'form':
        return <MangaForm
          handleChange={this.handleChange}
          categoryResults={this.categoryResults}
          manga={this.state.manga}/>
        break;
      case 'manga':
        return <Manga
          mangaList={this.state.mangaList}
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
        {/* <MangaForm
          handleChange={this.handleChange}
          categoryResults={this.categoryResults}
          manga={this.state.manga}/>

        <Manga
          mangaList={this.state.mangaList}
        /> */}
      </div>
    );
  }
}

export default App;
