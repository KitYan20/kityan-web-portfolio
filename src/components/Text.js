import { useState, useEffect } from 'react';

function TextType(text, delay = 200) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, delay);

        return () => clearInterval(intervalId);
    }, [currentIndex, text, delay]);

    return displayedText;
}

export default TextType;
