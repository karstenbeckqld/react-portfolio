export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-paragraph"><p>&copy; 2024 Karsten Beck</p></div>
            <div className="footer-paragraph">
                <p>Made with <a href="https://react.dev/" target="_blank">React</a></p>
            </div>
            <div className="image-container">
                <img className="footer-logo" src="/images/icons/react.svg" alt="React Logo" />
            </div>
        </footer>
    );
}