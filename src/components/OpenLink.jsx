import openIcon from '../assets/open.svg';

const OpenLink = ({link}) => {
  return <a href="{link}" target="_blank">
    <img src={openIcon} alt="Open file icon" />
  </a>
}

export default OpenLink;
