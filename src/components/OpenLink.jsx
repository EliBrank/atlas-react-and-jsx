import openIcon from '../assets/open.svg';

const OpenLink = ({link}) => {
  return <a href={link} target="_blank" className="text-offwhite no-underline flex">
    <img src={openIcon} alt="Open file icon" />
  </a>
}

export default OpenLink;
