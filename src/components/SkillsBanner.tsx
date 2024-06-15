import React, {useEffect, useState} from 'react';

type SkillBannerProps = {
    skills: string[];
};

const SkillBanner: React.FC<SkillBannerProps> = ({skills}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {

            if (skills.length === 0) return;

            const currentSkill = skills[currentSkillIndex];

            if (currentCharIndex < currentSkill.length) {
                setDisplayText((prev) => prev + currentSkill[currentCharIndex]);
                setCurrentCharIndex(currentCharIndex + 1);
            } else {
                setDisplayText(''); // Clear the text for the next skill
                setCurrentCharIndex(0);
                setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
            }
        }, 200); // Adjust the delay for each letter

        return () => clearTimeout(timer);
    }, [currentCharIndex, currentSkillIndex, skills]);

    return (
        <div>
            <span>{displayText}</span>
            <span className="cursor">|</span>
        </div>
    );
};

export default SkillBanner;
