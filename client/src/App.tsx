import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllPosts from './pages/AllPostsPage';
import CreatePost from './pages/CreatePostPage';
import { useAppDispatch } from './redux/hooks';
import { getMe } from './redux/authSlice';



function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create' element={<CreatePost />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
