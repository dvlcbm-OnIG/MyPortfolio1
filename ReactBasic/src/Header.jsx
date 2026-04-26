import profilePhoto from './assets/profile.jpg'
import { useState } from 'react'

function Header({ theme, onToggleTheme }){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen((currentState) => !currentState)
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false)
    }

    return(
        <header className="site-header">
            <div className="brand-lockup">
                <div className="brand-mark">
                    <img src={profilePhoto} alt="Russel Sto. Tomas logo" />
                </div>
                <div>
                    <p className="eyebrow"></p>
                    <h1>My Portfolio</h1>
                </div>
            </div>
            <button
                type="button"
                className="mobile-menu-btn"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-header-menu"
                onClick={handleMenuToggle}
            >
                <span className="menu-icon" aria-hidden="true"></span>
                <span>Menu</span>
            </button>

            <div id="mobile-header-menu" className={`header-actions ${isMenuOpen ? 'is-open' : ''}`}>
                <nav className="site-nav" aria-label="Main navigation">
                    <a href="#home" onClick={handleMenuItemClick}>Home</a>
                    <a href="#about" onClick={handleMenuItemClick}>About</a>
                    <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
                </nav>
                <button
                    type="button"
                    className="theme-toggle"
                    aria-label="Toggle dark mode"
                    aria-pressed={theme === 'dark'}
                    onClick={() => {
                        onToggleTheme()
                        setIsMenuOpen(false)
                    }}
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