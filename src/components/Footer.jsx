import footerLinks from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <ul>
        {/* for each link item in links json, create a list item with anchor tag */}
        {footerLinks.map(linkItem => (
          <li key={linkItem.id}>
            <a href={linkItem.link}>{linkItem.label}</a>
          </li>
        ))}
      </ul>
      <span>© {currentYear} Atlas School</span>
    </footer>
  );
}

export default Footer;
