import React from 'react';
import Manga from '../Manga';
import mangaDetails from '../../mangaDetails';


export default function MangaList(props) {
  const manga = mangaDetails.manga;
  let key = -1;
  return (
    <div className="manga">
      {props.mangaList.map(name => {
        key++;
        for(let i = 0; i < manga.length; i++) {
          if (name === manga[i].title) {
            return (
              <div className="container" key={key}>
                <h1>{manga[i].title}</h1>
                <div className="body">
                  <img src={manga[i].imageURL}/>
                  <div className="details">
                    <p><strong>Released:</strong> {manga[i].released}</p>
                    <p><strong>Author:</strong> {manga[i].author}</p>
                    <p><strong>Artist:</strong> {manga[i].artist}</p>
                    <p dangerouslySetInnerHTML={{__html: manga[i].description}}/>
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
