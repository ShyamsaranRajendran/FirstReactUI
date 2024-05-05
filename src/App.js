import React from 'react';
import Header from './components/Header/header'; // Corrected the import path and component name
// import Content from './components/content';
// import Body from './components/body';
import Main from './components/main';
import CardComponent from './components/CardComponent';
import Skillbox from './components/Skillbox';
import Question from './components/Question';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Main/>
      <CardComponent />
      <Skillbox/>
      <Question />
      <Register/>
      <Footer />
      </div>
  );
}

export default App;
