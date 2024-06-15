// App.jsx
import '@shoelace-style/shoelace/dist/themes/dark.css'

/*interface IHeaderProps {
    refs: {
        home: React.RefObject<HTMLDivElement>;
        about: React.RefObject<HTMLDivElement>;
        skills: React.RefObject<HTMLDivElement>;
        education: React.RefObject<HTMLDivElement>;
        portfolio: React.RefObject<HTMLDivElement>;
        contact: React.RefObject<HTMLDivElement>;
    };
}*/


export default function Header(/*{refs}: IHeaderProps*/) {

  /*  const [open, setOpen] = useState<boolean>(false);

    const appMenuRef = useRef<SlDrawerProps>(null);

    const pendingRef = useRef<React.RefObject<HTMLDivElement> | null>(null);

    // The hamburgerClick function opens the side menu when the hamburger button is clicked.
    function scrollToSection(elementRef: React.RefObject<HTMLDivElement>) {

        if (elementRef.current) {

            const divOffset = elementRef.current.offsetTop;

            console.log('elementRef.current.offsetTop: ', divOffset);

            window.scrollTo({
                top: divOffset || 0,
                behavior: "smooth",
            });
        }
    }

    function handleMenuClick(ref: React.RefObject<HTMLDivElement>, event: React.MouseEvent<HTMLAnchorElement>) { //
        event.preventDefault();
        if (ref.current) {
            setOpen(false);

            console.log('elementRef.current.offsetTop: ', ref.current.offsetTop);

            window.scrollTo({
                top: ref.current.offsetTop || 0,
                behavior: "smooth",
            });
        }
    }

    function toggleNav() {
        setOpen(!open);
    }

    return (
        <>
            <header className="app-header">
                <div className="app-header-main">
                    <div className="app-logo">
                        <a href="/"> <img className="logo" src="/images/kb-logo.svg" alt="Karsten Beck Logo" /> </a>
                        <h2>Karsten Beck</h2>
                    </div>

                    <SlIconButton
                        className="hamburger-btn"
                        name="list"
                        style={{fontSize: '2rem'}}//onClick={hamburgerClick}
                        onClick={toggleNav}

                    />
                </div>
            </header>

            <nav id="sidenav" className={`sidenav ${open ? 'open' : 'close'}`}>

                <div className="navTop">
                    <a href="#" id="closeBtn" className="closeButton" onClick={toggleNav}>&times;</a>
                    <ul>
                        <li className="navLink">
                            <a href="#home" onClick={(event) => handleMenuClick(refs.home, event)}>Home</a></li>
                        <li className="navLink">
                            <a onClick={(event) => handleMenuClick(refs.about, event)}>About</a>
                        </li>
                        <li className="navLink">
                            <a onClick={(event) => handleMenuClick(refs.skills, event)}>Skills</a></li>
                        <li className="navLink">
                            <a onClick={(event) => handleMenuClick(refs.education, event)}>Education</a>
                        </li>
                        <li className="navLink">
                            <a onClick={(event) => handleMenuClick(refs.portfolio, event)}>Portfolio</a>
                        </li>
                        <li className="navLink">
                            <a onClick={(event) => handleMenuClick(refs.contact, event)}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );*/
}