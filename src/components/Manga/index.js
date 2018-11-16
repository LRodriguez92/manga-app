import React from 'react';

export default function Manga(props) {
  let i = -1;
  return (
  <div>
    {props.mangaList.map(manga => {
      i++;
       return <h1 key={i}>{manga.title}</h1>
    })}
  </div>
  )
}
