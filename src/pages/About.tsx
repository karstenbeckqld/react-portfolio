import {CgWorkAlt} from "react-icons/cg";
import {MdOutlineLocationOn} from "react-icons/md";
import SkillBanner from "../components/SkillsBanner.tsx";

export default function About({scrollTo}: { scrollTo: (ref: string) => void }) {

    const skills = ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'Java', 'MongoDB', 'C#', 'PHP', 'React', 'Docker', 'Trello', 'Agile', 'EF Core', 'Google Cloud Services', 'MySQL', 'SQLite', 'JWT', 'GitHub', 'API Gateway', 'AWS Lamda', 'Photoshop', 'Illustrator', 'Figma', 'Adobe XD', 'Lucidchart'];

    const goToContact = (ref: string) => {
        scrollTo(ref);
    }

    return (
        <section className="section about-section">
            <div className="about-container">
                <div className="self">
                    <img className="self-image" src="../../images/self.png" alt="Karsten Beck" />
                    <h3>Karsten Beck</h3>
                </div>
                <div className="overview">
                    <div className="skills-display"><CgWorkAlt /><SkillBanner skills={skills} /></div>
                    <div className="skills-display"><MdOutlineLocationOn /> Brisbane, Australia</div>
                </div>
                <p>I have finished my subjects for my Bachelor of Information Technology at RMIT and am waiting for the
                   next possible graduation date. Before my studies, I finished a master's degree in chemistry and a PhD
                   in molecular biology in Germany. I've built websites since 2005 and had my own web design business in
                   between. During my studies with a minor in Internet Design, I became familiar with Agile, JavaScript,
                   Express, Node.js, Java, C#, ASP.NET, Node.js, PHP, and OO principles. I'm self taught in React,
                   Docker, Photoshop, Illustrator, and Adobe XD. My minor was in Internet Design sharpened my skills in
                   CSS, SCSS, and HTML. My current program GPA is 3.9.
                </p>
                <div className="inner-link-button-container">
                    <button className="inner-link-button" onClick={() => goToContact('contact')}>Get in Touch</button>
                </div>
            </div>
        </section>
    )
}

