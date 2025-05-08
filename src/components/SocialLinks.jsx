import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

const SocialLinks = () => {
  return <div className="social-links">
    <a href="https://www.linkedin.com/in/elias-brinkman/" target="_blank">
      <img src={linkedinIcon} alt="LinkedIn Icon" />
    </a>
    <a href="https://www.github.com/elibrank" target="_blank">
      <img src={githubIcon} alt="GitHub Icon" />
    </a>
  </div>
}

export default SocialLinks;
