import React from 'react';
import './App.css';
import AddBook from './components/add-book/add-book.component';
import AddBorrow from './components/add-borrow/add-borrow.component';

function App() {
  return (
    <div className="App">
      <AddBorrow />
    </div>
  );
}

export default App;
