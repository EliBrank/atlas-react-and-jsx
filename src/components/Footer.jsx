import footerLinks from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-0 pb-12 px-12 mt-12 flex flex-col items-center justify-center border-t-offwhite border-t">
      <ul className="list-none flex justify-center items-center p-0">
        {/* for each link item in links json, create a list item with anchor tag */}
        {footerLinks.map(linkItem => (
          <li key={linkItem.id} className="before:content-none p-4">
            <a href={linkItem.link} className="text-offwhite no-underline">{linkItem.label}</a>
          </li>
        ))}
      </ul>
      <span>© {currentYear} Atlas School</span>
    </footer>
  );
}

export default Footer;
