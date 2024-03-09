import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllPosts from './pages/AllPostsPage';
import CreatePost from './pages/CreatePostPage';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/AllPosts' element={<AllPosts />} />
          <Route path='/create' element={<CreatePost />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
