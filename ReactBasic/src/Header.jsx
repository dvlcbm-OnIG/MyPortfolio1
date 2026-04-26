import profilePhoto from './assets/profile.jpg'

function Header({ theme, onToggleTheme }){
    return(
        <header className="site-header">
            <div className="brand-lockup">
                <div className="brand-mark">
                    <img src={profilePhoto} alt="Russel Sto. Tomas logo" />
                </div>
                <div>
                    <p className="eyebrow">Portfolio</p>
                    <h1>Russel Sto. Tomas</h1>
                </div>
            </div>
            <div className="header-actions">
                <nav className="site-nav" aria-label="Main navigation">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#highlights">Highlights</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button
                    type="button"
                    className="theme-toggle"
                    aria-label="Toggle dark mode"
                    aria-pressed={theme === 'dark'}
                    onClick={onToggleTheme}
                >
                    <span className="toggle-track" aria-hidden="true">
                        <span className="toggle-thumb"></span>
                    </span>
                    <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
            </div>
        </header>
    );
}


export default Header