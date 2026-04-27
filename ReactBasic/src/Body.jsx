
import profilePhoto from './assets/profile.jpg'
import { useEffect, useRef } from 'react'

function Body(){
    const introCopyRef = useRef(null)
    const heroCardRef = useRef(null)
    const animationFrameRef = useRef(0)
    const parallaxFrameRef = useRef(0)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return () => {
                cancelAnimationFrame(animationFrameRef.current)
                cancelAnimationFrame(parallaxFrameRef.current)
            }
        }

        const updateIntroParallax = () => {
            const introCopyElement = introCopyRef.current
            if (!introCopyElement) {
                return
            }

            const scrollTop = window.scrollY || window.pageYOffset
            const slowShift = Math.min(scrollTop * 0.66, 240)
            introCopyElement.style.setProperty('--intro-parallax-shift', `${slowShift.toFixed(2)}px`)
        }

        const handleScroll = () => {
            cancelAnimationFrame(parallaxFrameRef.current)
            parallaxFrameRef.current = requestAnimationFrame(updateIntroParallax)
        }

        updateIntroParallax()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(animationFrameRef.current)
            cancelAnimationFrame(parallaxFrameRef.current)
        }
    }, [])

    const resetCardTilt = () => {
        const cardElement = heroCardRef.current
        if (!cardElement) {
            return
        }

        cardElement.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
    }

    const handleMouseMove = (event) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }

        if (window.matchMedia('(pointer: coarse)').matches) {
            return
        }

        const cardElement = heroCardRef.current
        if (!cardElement) {
            return
        }

        const bounds = cardElement.getBoundingClientRect()
        const pointerX = event.clientX - bounds.left
        const pointerY = event.clientY - bounds.top
        const centerX = bounds.width / 2
        const centerY = bounds.height / 2
        const rotateY = (pointerX - centerX) / 35
        const rotateX = (centerY - pointerY) / 35

        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = requestAnimationFrame(() => {
            cardElement.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        })
    }

    return(
        <>
            <section className="intro-screen reveal-on-scroll" style={{ '--reveal-delay': '40ms' }}>
                <div className="intro-copy" ref={introCopyRef}>
                    <p className="eyebrow">Introduction</p>
                    <h2>Hello there.</h2>
                    <p>Welcome to my portfolio website.</p>
                </div>
            </section>

            <section
                id="home"
                className="hero-card reveal-on-scroll"
                style={{ '--reveal-delay': '120ms' }}
                ref={heroCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetCardTilt}
            >
                <div className="hero-copy">
                    <h2>Building a calm, curious life through code, fitness, and growth.</h2>
                    <p>
                        I like working out to build an aesthetic physique,
                        and I am constantly learning everyday in programming.
                    </p>
                    
                </div>

                <aside className="profile-panel" aria-label="Profile summary">
                    <div className="profile-avatar">
                        <img src={profilePhoto} alt="Russel Sto. Tomas profile" />
                    </div>
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
        </>
    );
}

export default Body