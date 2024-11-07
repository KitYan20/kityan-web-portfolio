import React from 'react';
import '../styles/Home.css';
import TextType from './Text';
function Home() {
    const titleText = TextType("WELCOME TO MY PORTFOLIO!",200);
    return (
      <div className="home-container">
        <h1 className="title-text">{titleText}</h1>
      </div>
    );
}
export default Home;