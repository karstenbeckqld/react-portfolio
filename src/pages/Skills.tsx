import React from "react";


const Skills = React.forwardRef<HTMLDivElement>((_props, ref) => (
    <section
        className="section skills-section"
        ref={ref}
    >
        <h2>Skills</h2>
        <div className="skills-container">

            <div className="skill">
                <img className="skill-image" src="../../images/icons/js.png" alt="HTML5" />
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/ts.png" alt="HTML5" />
                <p>Typescript</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/react.png" alt="HTML5" />
                <p>React</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/node.png" alt="HTML5" />
                <p>Node.js</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/php.png" alt="HTML5" />
                <p>PHP</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/docker.png" alt="HTML5" />
                <p>Docker</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/html.png" alt="HTML5" />
                <p>HTML</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/css.png" alt="HTML5" />
                <p>CSS</p>
            </div>


            <div className="skill">
                <img className="skill-image" src="../../images/icons/c-sharp.png" alt="HTML5" />
                <p>C#</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/git.png" alt="HTML5" />
                <p>GitHub/Git</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/gcs.png" alt="HTML5" />
                <p>Google Cloud</p>
            </div>
            <div className="skill">
                <img className="skill-image" src="../../images/icons/aws.png" alt="HTML5" />
                <p>AWS</p>
            </div>
        </div>
    </section>

));

export default Skills;