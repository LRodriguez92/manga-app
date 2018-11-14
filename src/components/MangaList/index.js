import React from 'react';
import Manga from '../Manga';

export default function MangaList(props) {
  let i = 0;
  let max = 10;
  return (
    props.mangas.map(manga => {
      while (i < max) {
        // console.log(`manga: ${manga.t}`);
        i++;
        return <Manga key={i} title={manga.t}/>

      }
    })
  )
}
