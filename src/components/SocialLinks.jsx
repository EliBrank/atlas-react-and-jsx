import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

const SocialLinks = () => {
  return <div className='flex flex-row'>
    <a href="https://www.linkedin.com/in/elias-brinkman/" target="_blank" className='mr-4'>
      <img src={linkedinIcon} alt="LinkedIn Icon" />
    </a>
    <a href="https://github.com/EliBrank/atlas-react-and-jsx" target="_blank" className='mr-4'>
      <img src={githubIcon} alt="GitHub Icon" />
    </a>
  </div>
}

export default SocialLinks;
