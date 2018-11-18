import React, { Component } from 'react';
import './App.css';
import MangaForm from './components/MangaForm';
import Manga from './components/Manga';
import data from './mangaDetails';

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
