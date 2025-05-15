const AboutMe = ({children}) => {
  return (
    <div className="about-me bg-offwhite text-blue p-8 rounded-4xl flex items-center">
      <img src="/headshot.webp" alt="Elias Brinkman headshot" className="w-3xs rounded-4xl mr-8" />
      <p>{children}</p>
    </div>
  );
}

export default AboutMe;
