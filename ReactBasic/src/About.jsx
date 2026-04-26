import {
    SiCss,
    SiDotnet,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiVercel,
} from 'react-icons/si'
import { TbBrandCpp, TbBrandCSharp, TbBrandVisualStudio, TbBrandVscode } from 'react-icons/tb'

export default function About(){
    const techStackIcons = [
        { label: 'HTML5', icon: SiHtml5 },
        { label: 'CSS3', icon: SiCss },
        { label: 'JavaScript', icon: SiJavascript },
        { label: 'MongoDB', icon: SiMongodb },
        { label: 'Express', icon: SiExpress },
        { label: 'React', icon: SiReact },
        { label: 'Node.js', icon: SiNodedotjs },
        { label: 'C#', icon: TbBrandCSharp },
        { label: 'C++', icon: TbBrandCpp },
        { label: 'Python', icon: SiPython },
    ]

    const toolsIcons = [
        { label: 'Git', icon: SiGit },
        { label: 'GitHub', icon: SiGithub },
        { label: 'Vercel', icon: SiVercel },
        { label: '.NET', icon: SiDotnet },
        { label: 'VS Code', icon: TbBrandVscode },
        { label: 'MS Visual Studio', icon: TbBrandVisualStudio },
    ]

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

            <article className="info-card soft-card stack-card">
                <p className="eyebrow">Tech stack</p>
                <ul className="icon-grid" aria-label="Tech stack icons">
                    {techStackIcons.map(({ label, icon: Icon }) => (
                        <li key={label} className="icon-pill" title={label} aria-label={label}>
                            <Icon />
                        </li>
                    ))}
                </ul>
            </article>

            <article className="info-card accent-card stack-card">
                <p className="eyebrow">Tools</p>
                <ul className="icon-grid tools-grid" aria-label="Tools icons">
                    {toolsIcons.map(({ label, icon: Icon }) => (
                        <li key={label} className="icon-pill" title={label} aria-label={label}>
                            <Icon />
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

