export default function About(){
    return(
        <section id="about" className="content-grid">
            <article className="info-card" id="highlights">
                <p className="eyebrow">About me</p>
                <h3>Curious, motivated, and always learning.</h3>
                <p>
                    I improve my social skills by forcing myself into public speaking situations.
                    I like to understand how things work, so I keep finding ways to learn and I often
                    use AI platforms as a guide while studying.
                </p>
            </article>

            <article className="info-card soft-card">
                <p className="eyebrow">Hobbies</p>
                <ul className="feature-list">
                    <li>Working out to have an aesthetic physique</li>
                    <li>Learning programming every day</li>
                    <li>Practicing public speaking and confidence</li>
                </ul>
            </article>

            <article className="info-card accent-card">
                <p className="eyebrow">What I value</p>
                <h3>Growth with consistency.</h3>
                <p>
                    I like a clean pace, steady progress, and a lifestyle that keeps me calm,
                    focused, and better than yesterday.
                </p>
            </article>
        </section>
    )
}

