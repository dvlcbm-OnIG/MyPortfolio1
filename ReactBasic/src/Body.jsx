
function Body(){

    return(
        <section id="home" className="hero-card">
            <div className="hero-copy">
                <p className="eyebrow">18 years old | 1st Year BSIT</p>
                <h2>Building a calm, curious life through code, fitness, and growth.</h2>
                <p>
                    I am Russel Sto. Tomas. I like working out to build an aesthetic physique,
                    and I am constantly learning everyday in programming.
                </p>
                <div className="hero-actions">
                    <a className="primary-link" href="#about">Learn more</a>
                    <a className="secondary-link" href="#contact">Connect</a>
                </div>
            </div>

            <aside className="profile-panel" aria-label="Profile summary">
                <div className="profile-avatar">RST</div>
                <div className="profile-list">
                    <div>
                        <span>Name</span>
                        <strong>Russel Sto. Tomas</strong>
                    </div>
                    <div>
                        <span>Course</span>
                        <strong>BSIT, 1st Year</strong>
                    </div>
                    <div>
                        <span>Focus</span>
                        <strong>Learning, discipline, confidence</strong>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Body