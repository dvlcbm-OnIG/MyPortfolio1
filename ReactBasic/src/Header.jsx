import profilePhoto from './assets/profile.jpg'

function Header(){
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
            <nav className="site-nav" aria-label="Main navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#highlights">Highlights</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}


export default Header