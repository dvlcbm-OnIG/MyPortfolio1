
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'

function Footer(){
    return(
        <footer id="contact" className="site-footer reveal-on-scroll" style={{ '--reveal-delay': '160ms' }}>
            <div>
                <p className="eyebrow">Contact</p>
            </div>
            <div className="contact-links" aria-label="Social links">
                <a
                    href="https://www.facebook.com/russeljeoff143"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                    <span>Facebook</span>
                </a>
                <a
                    href="https://www.instagram.com/dvlcbm?fbclid=IwY2xjawRZt65leHRuA2FlbQIxMABicmlkETFyd0VhQmU1aG81WEszSzBKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhaZVBpga6CUMeFYhjFEVvoF0vCwAygzSULg8sc1EfqpHlItHHA138fVkf3q_aem_yATJKdyx-0dA7fhOEYiOGQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
                <a
                    href="https://github.com/dvlcbm-OnIG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>
            </div>
          
            <p>&copy; {new Date().getFullYear()} Russel Sto. Tomas</p>
        </footer>
    )
}

export default Footer