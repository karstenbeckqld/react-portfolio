import { FaRegCircle } from "react-icons/fa6";

export default function Education() {
    return (
        <section className="section education-section">
            <h2>Education</h2>
            <div className="education-container">
                <div className="education">
                    <div className="education-title">
                        <FaRegCircle className="circle" />
                        <h4>2021 - 2024</h4>
                    </div>
                    <h3>RMIT University</h3>
                    <p>Bachelor of Information Technology</p>
                </div>
                <div className="education">
                    <div className="education-title">
                        <FaRegCircle className="circle" />
                        <h4>2009 - 2010</h4>
                    </div>
                    <h3>Sessions College of Design</h3>
                    <p>Advanced Professional Certificate in Web Design</p>
                </div>
                <div className="education">
                    <div className="education-title">
                        <FaRegCircle className="circle" />
                        <h4>1998 - 2002</h4>
                    </div>
                    <h3>Ludwig-Maximilians University</h3>
                    <p>PhD in Science (Molecular Biology) with Magna Cum Laude</p>
                </div>
                <div className="education">
                    <div className="education-title">
                        <FaRegCircle className="circle" />
                        <h4>1991 - 1998</h4>
                    </div>
                    <h3>Ludwig-Maximilians University</h3>
                    <p>Master's Degree (Chemistry)</p>
                </div>
            </div>
        </section>
    );
}