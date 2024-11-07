import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
function Home() {
    const titleText = "WELCOME TO MY PORTFOLIO!";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect( ()=> {
        const intervalId = setInterval(()=> {
            if (currentIndex < titleText.length){
                setDisplayedText(prevText => prevText + titleText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1)
            }else{
                clearInterval(intervalId);
            }
        },100);
        return () => clearInterval(intervalId);
    }, [currentIndex, titleText]);
  
    return (
      <div className="home-container">
        <h1 className="title-text">{displayedText}</h1>
      </div>
    );
}
export default Home;