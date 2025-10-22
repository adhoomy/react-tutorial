import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('one');
  const handleClick = () => {
    if (text === 'one') {
      setText('two');
    } else {
      setText('one');
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics
