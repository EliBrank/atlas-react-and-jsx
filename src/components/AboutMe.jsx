const AboutMe = ({children}) => {
  return (
    <div className="about-me">
      <img src="/headshot.webp" alt="Elias Brinkman headshot" />
      <p>{children}</p>
    </div>
  );
}

export default AboutMe;
