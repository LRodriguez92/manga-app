import React from 'react';

export default function MangaForm(props) {
  return (
    <form>
      <select name="category" onChange={props.categoryResults}>
        <option defaultValue value="category">Category</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="ecchi">Ecchi</option>
        <option value="fantasy">Fantasy</option>
        <option value="gender bender">Gender Bender</option>
        <option value="harem">Harem</option>
        <option value="historical">Historical</option>
        <option value="horro">Horror</option>
        <option value="josei">Josei</option>
        <option value="martial arts">Martial Arts</option>
        <option value="mature">Mature</option>
        <option value="mecha">Mecha</option>
        <option value="mystery">Mystery</option>
        <option value="psychological">Psychological</option>
        <option value="romance">Romance</option>
        <option value="school Life">School Life</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="seinen">Seinen</option>
        <option value="shoujo">Shoujo</option>
        <option value="shounen">Shounen</option>
        <option value="slice of life">Slice of Life</option>
        <option value="supernatural">Supernatural</option>
        <option value="tragedy">Tragedy</option>
      </select>
      <input
        type="text"
        name="mangaSearch"
        value={props.manga}
        onChange={props.handleChange}
        placeholder="Manga Title Here"
        ></input>
      <button>Submit</button>
    </form>
  )
}
