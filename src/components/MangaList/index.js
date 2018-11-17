import React from 'react';
import Manga from '../Manga';
import mangaDetails from '../../mangaDetails';


export default function MangaList(props) {
  let i = -1;
  return (
    <div>
      {props.mangaList.map(string => {
        i++;
         return (
           <div key={i}>
             <h1>{string}</h1>
             <img src={`${string.imageURL}`}/>
             <p>{string.description}</p>
           </div>
         )
      })}
      {/* <Manga mangaList={props.mangaList}/> */}
    </div>
  )
}
