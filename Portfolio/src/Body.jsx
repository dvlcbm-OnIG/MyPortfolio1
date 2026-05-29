
import profilePhoto from './assets/profile.jpg'
import { useEffect, useRef, useState } from 'react'

const introLines = {
    heading: [
        { text: 'Hello, ', className: 'intro-tone-primary' },
        { text: 'there!', className: 'intro-tone-secondary' },
    ],
    paragraph: [
        { text: 'Welcome', className: 'intro-tone-primary' },
        { text: 'to my portfolio website.', className: 'intro-tone-secondary' },
    ],
}

function getLineLength(segments) {
    return segments.reduce((totalLength, segment, index) => {
        return totalLength + segment.text.length + (index < segments.length - 1 ? 1 : 0)
    }, 0)
}

function renderTypewriterLine(Tag, segments, visibleLength, showCursor) {
    const content = []
    let consumedLength = 0

    segments.forEach((segment, index) => {
        const segmentLength = segment.text.length
        const visibleSegmentLength = Math.max(0, Math.min(visibleLength - consumedLength, segmentLength))

        if (visibleSegmentLength > 0) {
            content.push(
                <span className={segment.className} key={`${segment.text}-${index}`}>
                    {segment.text.slice(0, visibleSegmentLength)}
                </span>
            )
        }

        consumedLength += segmentLength

        if (index < segments.length - 1) {
            if (visibleLength > consumedLength) {
                content.push(<span key={`space-${index}`}>{' '}</span>)
            }

            consumedLength += 1
        }
    })

        if (showCursor) {
            content.push(<span className="typewriter-cursor" aria-hidden="true" key="cursor-end" />)
    }

    return <Tag className="typewriter-line">{content}</Tag>
}

function IntroTypewriter() {
    const headingLength = getLineLength(introLines.heading)
    const paragraphLength = getLineLength(introLines.paragraph)
    const [animationState, setAnimationState] = useState({ phase: 'typing-heading', headingLength: 0, paragraphLength: 0 })

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setAnimationState((currentState) => {
                if (
                    currentState.phase === 'static' &&
                    currentState.headingLength === headingLength &&
                    currentState.paragraphLength === paragraphLength
                ) {
                    return currentState
                }

                return { phase: 'static', headingLength: headingLength, paragraphLength: paragraphLength }
            })

            return
        }

        const delay = animationState.phase === 'typing-heading' || animationState.phase === 'typing-paragraph' || animationState.phase === 'deleting-paragraph' || animationState.phase === 'deleting-heading'
            ? 110
            : 900

        const timeoutId = window.setTimeout(() => {
            setAnimationState((currentState) => {
                switch (currentState.phase) {
                    case 'typing-heading':
                        if (currentState.headingLength < headingLength) {
                            return {
                                ...currentState,
                                headingLength: currentState.headingLength + 1,
                            }
                        }

                        return { ...currentState, phase: 'typing-paragraph' }
                    case 'typing-paragraph':
                        if (currentState.paragraphLength < paragraphLength) {
                            return {
                                ...currentState,
                                paragraphLength: currentState.paragraphLength + 1,
                            }
                        }

                        return { ...currentState, phase: 'deleting-paragraph' }
                    case 'deleting-paragraph':
                        if (currentState.paragraphLength > 0) {
                            return {
                                ...currentState,
                                paragraphLength: currentState.paragraphLength - 1,
                            }
                        }

                        return { ...currentState, phase: 'deleting-heading' }
                    case 'deleting-heading':
                        if (currentState.headingLength > 0) {
                            return {
                                ...currentState,
                                headingLength: currentState.headingLength - 1,
                            }
                        }

                        return { phase: 'typing-heading', headingLength: 0, paragraphLength: 0 }
                    default:
                        return { phase: 'typing-heading', headingLength: 0, paragraphLength: 0 }
                }
            })
        }, delay)

        return () => window.clearTimeout(timeoutId)
    }, [animationState.phase, animationState.headingLength, animationState.paragraphLength, headingLength, paragraphLength])

    return (
        <>
            {renderTypewriterLine(
                'h2',
                introLines.heading,
                animationState.headingLength,
                animationState.phase === 'typing-heading' || animationState.phase === 'deleting-heading' || animationState.phase === 'static'
            )}
            {renderTypewriterLine(
                'p',
                introLines.paragraph,
                animationState.paragraphLength,
                animationState.phase === 'typing-paragraph' || animationState.phase === 'deleting-paragraph' || animationState.phase === 'static'
            )}
        </>
    )
}

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
                    <IntroTypewriter />
                </div>
            </section>

            <section id="home" className="home-reveal reveal-on-scroll" style={{ '--reveal-delay': '120ms' }}>
                <div
                    className="hero-card"
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
                </div>
            </section>
        </>
    );
}

export default Body