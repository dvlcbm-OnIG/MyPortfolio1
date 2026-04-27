import Header from './Header.jsx'
import Footer from './footer.jsx'
import About from './About.jsx'
import Body from './Body.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    document.body.classList.remove('theme-reveal-active')
    requestAnimationFrame(() => {
      document.body.classList.add('theme-reveal-active')
    })

    const timeoutId = window.setTimeout(() => {
      document.body.classList.remove('theme-reveal-active')
    }, 760)

    return () => window.clearTimeout(timeoutId)
  }, [theme])

  useEffect(() => {
    const sectionsToReveal = document.querySelectorAll('.reveal-on-scroll')

    if (!sectionsToReveal.length) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sectionsToReveal.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        root: null,
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    sectionsToReveal.forEach((section) => revealObserver.observe(section))

    return () => revealObserver.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return(
    <>
      <Header theme={theme} onToggleTheme={toggleTheme}></Header>
      <main className="page-shell">
        <Body></Body>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
