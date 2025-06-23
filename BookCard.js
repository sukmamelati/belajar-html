import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '150px', textAlign: 'center' }}>
      <img src={book.cover} alt={book.title} style={{ width: '100%' }} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.year}</p>
    </div>
  );
};

export default BookCard;