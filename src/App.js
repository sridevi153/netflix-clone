import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import MyList from './MyList';
import MovieDetailPage from './MovieDetailPage';
import Login from './Login'; 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/mylist' element={<MyList />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;