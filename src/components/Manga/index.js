import React from 'react';
import mangaDetails from '../../mangaDetails';
import './index.css';
import BackButton from '../BackButton';


export default function Manga(props) {
  const manga = mangaDetails.manga;
  let key = -1;
  return (
    <div id="mangas">
      <BackButton homeView={props.homeView}/>
      {props.mangaList.map(name => {
        key++;
        for(let i = 0; i < manga.length; i++) {
          if (name === manga[i].title) {
            return (
              <div className="container" key={key}>
                <div className="card">
                  <h1 className="title">{manga[i].title}</h1>
                    <div className="body">
                      <img src={manga[i].imageURL}/>
                      <div className="details">
                        <p><strong>Released:</strong> {manga[i].released}</p>
                        <p><strong>Author:</strong> {manga[i].author}</p>
                        <p><strong>Artist:</strong> {manga[i].artist}</p>
                        <div className="description">
                          <strong>Description:</strong>
                          <p dangerouslySetInnerHTML={{__html: manga[i].description}}/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      })}
    </div>
  )
}
