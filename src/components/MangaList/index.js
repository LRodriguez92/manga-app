import React from 'react';
import Manga from '../Manga';

export default function MangaList(props) {
  return (
    <div>
      <Manga mangaList={props.mangaList}/>
    </div>
  )
}
