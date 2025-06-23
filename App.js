import React from 'react';
import BookCard from './BookCard';

const books = [
  { id: 1, title: 'Menguasai Pemrograman OOP', author: 'Ade Rahmat', year: 2018, cover: '/image/buku1 menguasai_pemrograman.jpg' },
  { id: 2, title: 'Dasar Pemrograman Python 3', author: 'Abdi Lase', year: 2019, cover: '/image/buku 2 phton.jpg' },
  { id: 3, title: 'Sistem Basis Data & SQL', author: 'Dika Sinatria', year: 2022, cover: '/image/buku 3sistem_basis.jpg' },
  { id: 4, title: 'Dasar .NET', author: 'Ade Rahmat', year: 2018, cover: '/image/buku4 net.jpg' },
  { id: 5, title: 'Metodologi SI', author: 'Samsul Ramli', year: 2017, cover: '/image/buku5.jpg' }
];

const App = () => {
  const popularBooks = books.slice(0, 3);

  return (
    <div>
      <h2>Popular Books</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {popularBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>

      <h2> Our Books</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {books.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default App;