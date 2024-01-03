import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './component/login';
import Posts from './component/posts';
import './App.css';
import Home from './component/home';

const Logout = () => {
  return <h2>Logout Component</h2>;
};



const Todos = () => {
  return <h2>Todos Component</h2>;
};
// const Posts = () => {
//   return <h2>Posts Component</h2>;
// };

const Info = () => {
  return <h2>Info Component</h2>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
