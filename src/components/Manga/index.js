import React from 'react';
import mangaDetails from '../../mangaDetails';

export default function Manga(props) {
  let i = -1;
  return (
  <div>
    <h1>hi</h1>
    {props.mangaList.map(manga => {
      i++;
       return (
         <div key={i}>
           <h1>{manga}</h1>
           <img src={`${manga.imageURL}`}/>
           <p>{manga.description}</p>
         </div>
       )
    })}
  </div>
  )
}
