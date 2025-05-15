import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";

const Header = () => {
  return <nav className="flex justify-between items-center">
    <Greeting />
    <SocialLinks />
  </nav>
}

export default Header;
