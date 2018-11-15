import React from 'react';
import Manga from '../Manga';

export default function MangaList(props) {
  let min = 0; //use in state
  let max = 10;
  return (
    <div>
      {/* {props.mangas.map(manga => {
        manga.c.map(cat => {
          if (cat.toLowerCase() === props.category) {

            // while (min < max) {
            //   {console.log('i want to render')}
            //   {props.getMangaDetails(manga.i)}
            //   min++;
              // return <Manga
              //   key={min}
              //   title={props.title}
              //   imageURL={props.imageURL}
              //   released={props.released}
              //   description={props.description}
              // />
            // }
          }
        })
      })} */}
    </div>
  )
}
