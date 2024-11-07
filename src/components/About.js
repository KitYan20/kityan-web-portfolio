import { React} from 'react';
import '../styles/About.css';
import TextType from './Text';
function About () {
    const AboutText = TextType("About Me",200);
    const TechnicalText = TextType("Technical Skills",150);
    const PersonalText = TextType("Personal Skills",100);
    return (
        <div className="about-container">
            <h2 className="about-title">{AboutText}</h2>
                <p className="about-text">I’m a software developer with a diverse amount of skillsets. As a dedicated Computer Science and Linguistics student at Boston University, I've actively contributed to the academic community as a Teaching Assistant for the Introduction to Computer Systems course. My tenure here has also been enriched by hands-on experience in diverse personal and group projects. Through these projects, I've honed a comprehensive skill set encompassing both FrontEnd and BackEnd development, fostering a deep understanding of the intricacies of software development. Outside of school, I find joy in practicing Martial Arts and participating in Chinese Lion Dancing festivities during events. </p>
            <h2 className="about-title">{TechnicalText}</h2>
                <p className="about-text">Front-End: JavaScript, React, HTML, CSS</p>
                <p className="about-text">Back-End: Python (Flask,PyTorch), Java, C, Node.Js, Assembly (Intel x64)</p>
                <p className="about-text">Databases: SQL/MySQL, NoSQL/(FireBase, MongoDB) </p>
                <p className="about-text">Mobile Development: React Native, Expo </p>
                <p className="about-text">Tools & Platforms: Git, GitHub, VS Code, Red Hat OpenShift, Jupyter, Linux, macOS, Windows, MS Office Suite</p>
            <h2 className="about-title">{PersonalText}</h2>
                <p className="about-text">Personal:Problem Solving, Communication, Analytical Thinking, Time Management, Multitasking, Leadership </p>
                <p className="about-text">Language: English (Fluent), Cantonese (Fluent), Mandarin (Intermediate) </p>
      </div>
    );
}
export default About;
