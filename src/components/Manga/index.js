import React from 'react';

export default function Manga(props) {
  return (
  <div>
    {props.mangaList.map(manga => {
       return <h1>{manga.title}</h1>
    })}
  </div>
  )
}
