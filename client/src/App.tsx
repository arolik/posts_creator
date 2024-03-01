import React from 'react';
import './App.css';
import Layout from './components/Layout';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <RegisterPage />
      </Layout>
      
    </div>
  );
}

export default App;
