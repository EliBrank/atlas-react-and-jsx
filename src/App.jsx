import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-250 mx-auto my-0 p-4">
      <Header />
      <Section title="What is react?">
        React is a JavaScript front-end library designed for creating user interfaces. It enables developers to create reusable components which can then manage state independently of one another, allowing for efficient dynamic and interactive applications. React can be used in a variety of contexts: for developing single-page applications, mobile apps (using React Native), and can even be further extended to a full framework by integrating with tools like Next.JS.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Declarative approach scales well with larger projects</li>
          <li>Virtual DOM increases performance by limiting DOM manipulations</li>
          <li>Extensive ecosystem of libraries and tools, with large community support</li>
          <li>JSX syntax combines inuitive understanding of JavaScript and HTML</li>
          <li>Endlessly flexbible structure enabled via component-based architecture</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource link="https://react.dev/learn" label="Official React Quick Start Guide" />
        <HelpfulResource link="https://egghead.io/courses/the-beginner-s-guide-to-react" label="Egghead.io Introductory Video Course" />
        <HelpfulResource link="https://www.codecademy.com/learn/react-101" label="Codecademy Interactive Course" />
      </Section>
      <AboutMe>
        Hi! I'm Elias Brinkman, a front-end developer with a background in digital art. I'm currently a 5th trimester student at Atlas School, in the Full-Stack Development spec. I enjoy the puzzle-solving aspects of low-level programming, but I also love any chance to add interactivity and visual interest to my projects, which most recently manifested in my deep dive into Three.js - a JavaScript library enabling 3D graphics and animation in web pages via WebGL. After school I hope to leverage my experience in 3D modeling and design in some way, but I'm open to a variety of applications beyond that, and I think that any work involving education is also deeply appealing! Outside of programming, I also enjoy collecting vinyl records and playing indie video games.
      </AboutMe>
      <Footer />
    </div>
  );
}

export default App;
