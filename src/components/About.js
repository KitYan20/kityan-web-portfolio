import { React, useState,useEffect } from 'react';
import '../styles/About.css';
function About () {
    const titleText = "About Me!";
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
        },200);
        return () => clearInterval(intervalId);
    }, [currentIndex, titleText]);

    return (
        <div className="about-container">
            <h2 className="about-title">{displayedText}</h2>
            <p className="about-text">
                I’m a software developer specializing in both front-end and back-end technologies. 
                <p>Front-End: JavaScript, React, HTML, CSS</p>
            <p className="about-text">Back-End: Node.Js, Python, Java, C</p>
            <p className="about-text">Databases: SQL, NoSQL </p>
                
            </p>
            
      </div>
    );
}
export default About;
