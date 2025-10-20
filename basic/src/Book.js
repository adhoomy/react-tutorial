import React from 'react';

const Book = ({ title, author, image }) => {
    const clickHandler = () => {
      alert('hello world');
    }
    const anotherHandler = () => {
      alert('another button');
    }
    return (
      <article className='book'>
        <img
          src={image}
          alt=""
        />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Button</button>
        <button type='button' onClick={anotherHandler}>Another Button</button>
      </article>
    );
}

export default Book;