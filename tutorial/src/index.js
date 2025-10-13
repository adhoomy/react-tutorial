import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    title: 'The Encompassing Epistle: Al-Risalah al-Jami\'ah',
    author: 'Aḥmed ibn Zayn Al-Ḥabashī',
    image: 'https://m.media-amazon.com/images/I/71jltELj4YL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    title: 'The Accessible Conspectus',
    author: 'Musa Furber',
    image: 'https://m.media-amazon.com/images/I/313eYpZ7pfL._SS135_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, author, image } = props;

  return (
    <article className='book'>
      <img
        src={image}
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);