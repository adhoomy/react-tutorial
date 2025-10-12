import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src="https://m.media-amazon.com/images/I/71jltELj4YL._AC_UY327_FMwebp_QL65_.jpg" alt="" />;

const Title = () => <h1>The Encompassing Epistle: Al-Risalah al-Jami'ah</h1>;

const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Aḥmed ibn Zayn Al-Ḥabashī</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);