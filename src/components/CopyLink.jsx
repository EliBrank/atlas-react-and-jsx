import copyIcon from '../assets/copy.svg';

const CopyLink = ({link}) => {
  return (
    <img
      src={copyIcon}
      alt="Copy file icon"
      className="ml-2 cursor-pointer"
      onClick={() => {copyToClipboard(link)}}
    />
  );
}

function copyToClipboard(copyText) {
  navigator.clipboard.writeText(copyText);
}

export default CopyLink;
