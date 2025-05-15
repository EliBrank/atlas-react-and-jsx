import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

const HelpfulResource = ({link, label}) => {
  return (
    <div className="helpful-resource flex mt-4 items-center font-bold text-offwhite no-underline last:mb-8">
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;
