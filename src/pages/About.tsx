import {CgWorkAlt} from "react-icons/cg";
import {MdOutlineLocationOn} from "react-icons/md";
import SkillBanner from "../components/SkillsBanner.tsx";

export default function About() {

    const skills = ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'Java', 'MongoDB','C#', 'PHP', 'React', 'Docker', 'Trello', 'Agile','EF Core', 'Google Cloud Services',  'MySQL', 'SQLite', 'JWT', 'GitHub',   'API Gateway', 'AWS Lamda', 'Photoshop', 'Illustrator', 'Figma', 'Adobe XD', 'Lucidchart'];

    return (
        <section className="section about-section">
            <div className="self">
                <img className="self-image" src="../../images/self.png" alt="Karsten Beck" />
            </div>

            <div className="about-container">
                <div className="overview">
                    <div className="skills-display"><CgWorkAlt /><SkillBanner skills={skills} /></div>
                    <div className="skills-display"><MdOutlineLocationOn /> Brisbane, Australia</div>
                </div>
                <p>I have finished my subjects for my Bachelor of Information Technology at RMIT and am waiting for the
                   next possible graduation date. Before my studies, I achieved a master's degree in chemistry and a PhD
                   in molecular biology in Germany. After that, I worked as a medical sales representative for 16 years.
                   During my studies with RMIT I became familiar with the agile methodology and gained an overview of
                   the most in demand programming languages and frameworks, for example, Java, JavaScript, C#, ASP.NET,
                   Node.js, and PHP. My minor was in Internet Design, which enhanced my more than ten years' experience
                   in web design and sharpened my skills in CSS, SCSS, and HTML. My current program GPA is 3.9, and my
                   studies taught me to apply object-oriented principles in multiple programming languages.
                </p>
            </div>
        </section>
    )
}

