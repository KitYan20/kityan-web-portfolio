// src/components/Projects.js
import { React, useState,useEffect } from 'react';
import '../styles/Projects.css';

// Import GitHub icon for the repository link
import githubIcon from '../assets/github.svg';
function Projects () {
    const projects = [
        {
            title: 'SafeSteps',
            description: 'Collaborated in a team of 4 to develop Safe Steps, a mobile app promoting pedestrian safety at intersections, utilizing React Native for front-end design and Firebase for back-end to store and retrieve accident/obstacle data',
            technology: 'React Native, Firebase',
            repoLink:'https://github.com/mhiga701/safesteps-frontend/tree/0.4.2'
        },
        {
            title: "Harry Potter's with GPT-2 and LSTM",
            description: 'Fine-tuned pre-trained LLM GPT-2 model and built a custom LSTM model to generate Harry Potter-style text passages ',
            technology: 'Python/PyTorch',
            repoLink:'https://github.com/KitYan20/Text-Generation-Models',
        },
        {
            title: "Spam Classification with FFNN",
            description: 'A Feed-Forward Neural Network that helps classifying emails from the Enron dataset to classify whether or not an email is a spam',
            technology: 'Python/PyTorch',
            repoLink:'https://github.com/KitYan20/Word_Embeddings_FFNN',
        },
        {
            title: 'Multi-Process Task Pipeline',
            description: 'A multi-processing task pipeline engine using C to efficiently chain a sequence of three processes, where each process consumes input from a data file and produces output for the subsequent process',
            technology: 'C Programming',
            repoLink:'https://github.com/KitYan20/Multi-Process-Task-Pipeline',
        },
        {
            title: 'Webserver',
            description: 'A webserver using C to allow clients to request for certain data from a clients local server',
            technology: 'C Programming',
            repoLink:'https://github.com/KitYan20/Webserver',
        },
        {
            title: 'Binary File Descriptor',
            description: "Utilized GNU's BFD Library to retrieve the sections and symbols of a object file utilizing Static and Dynamic Libraries and print out the contents using unbuffered IO routines",
            technology: 'C Programming',
            repoLink:'https://github.com/KitYan20/Binary_File_Descriptor',
        },
        {
            title: 'FileTree Traversal',
            description: 'Created a FileTree Traversal to traverse contents of a file given a user path, file type: .C, .S, .txt, files with symbolic links, and string pattern matching ',
            technology: 'C Programming',
            repoLink:'https://github.com/KitYan20/Filetree_Traversal',
        },
        {
            title: 'ArtistVerse',
            description: 'Created a full-stack web app enabling users to discover songs and events by artist using Spotify and Ticketmaster APIs to generate personalized song and event recommendations ',
            technology: 'Front-End: HTML/CSS, JavaScript, Back-End: Python/Flask, SQL',
            repoLink:'https://github.com/KitYan20/ArtistVerse',
        },
        {
            title: 'Calculator',
            description: 'Created a calculator that performs data manipulation in data section source code files, performing and/or bitwise operations, sum operations on binary numbers, etc.',
            technology: 'Assembly Programming',
            repoLink:'https://github.com/KitYan20/Calculator',
        },        
        {
            title: 'NYT Letter Boxed Solver',
            description: 'Created a Letter Boxed Solver that uses recursive backtracking algorithm to compute the solutions for the daily NYT Letter Boxed game',
            technology: 'Java',
            repoLink:'https://github.com/KitYan20/Letter_Boxed_Solver',
        },
        {
            title: 'AI Connect Four',
            description: 'Recreated the classic Connect-Four game with fun and interactive modes that you can play/spectate in.',
            technology: 'Python',
            repoLink:'https://github.com/KitYan20/Connect-Four',
        },
        {
            title: 'Eight-Puzzle',
            description: 'A classic Eight Puzzle game that has been designed to test the efficiency of each algorithms (BFS, DFS, Greedy, A*) in solving each given eight puzzles written in a 9 digit string in a given text file',
            technology: 'Python',
            repoLink:'https://github.com/KitYan20/Eight-Puzzle',
        },
    ];
    const titleText = "My Projects!";
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
        <div className='projects-container'>
            <h2 className='projects-title'>{displayedText}</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
                <li key={index} className="project-item">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technology}</p>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <img src={githubIcon} alt="GitHub repository" className="github-icon" />
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default Projects;