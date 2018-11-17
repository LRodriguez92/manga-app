import React from 'react';
import Manga from '../Manga';
import mangaDetails from '../../mangaDetails';


export default function MangaList(props) {
  const manga = mangaDetails.manga;
  let key = -1;
  return (
    <div>
      {props.mangaList.map(name => {
        key++;
        for(let i = 0; i < manga.length; i++) {
          if (name === manga[i].title) {
            // console.log('match');
            return (
              <div key={key}>
                <h1>{manga[i].title}</h1>
                <img src={manga[i].imageURL}/>
              </div>
            )
          }
        }

         // return (
         //   <div key={i}>
         //     <h1>{name}</h1>
         //     <img src={`${name.imageURL}`}/>
         //     <p>{name.description}</p>
         //   </div>
         // )
      })}
      {/* <Manga mangaList={props.mangaList}/> */}
    </div>
  )
}
