import Button from "./Button.tsx";

export default function Navigation() {

    function gotoSection(section: string) {
        console.log('gotoSection: ', section);

        const pageElement = document.getElementById(section);

        if (pageElement !== null) {
            window.scrollTo({
                    top: pageElement.offsetTop,
                    behavior: 'smooth',
                }
            );
            document.getElementById(section + '-btn')?.classList.add('active');
        } else {
            window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                }
            );
        }
    }

    return (
        <nav className="nav">
            <div className='nav-container'>
                <div className="logo">
                    <h1>Karsten Beck</h1>
                </div>
                <ul>
                    <li><Button
                        id='about-btn'
                        text='About'
                        type='button'
                        className='nav-button'
                        onClick={() => gotoSection('about')}
                    /></li>
                    <li><Button
                        id='skills-btn'
                        text='Skills'
                        type='button'
                        className='nav-button'
                        onClick={() => gotoSection('skills')}
                    /></li>
                    <li><Button
                        id='education-btn'
                        text='Education'
                        type='button'
                        className='nav-button'
                        onClick={() => gotoSection('education')}
                    /></li>
                    <li><Button
                        id='portfolio-btn'
                        text='Projects'
                        type='button'
                        className='nav-button'
                        onClick={() => gotoSection('portfolio')}
                    /></li>
                    <li><Button
                        id='contact-btn'
                        text='Contact'
                        type='button'
                        className='nav-button'
                        onClick={() => gotoSection('contact')}
                    /></li>
                </ul>
            </div>
        </nav>
    );
};