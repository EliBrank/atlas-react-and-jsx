import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

function App() {
  return (
    <>
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
        <HelpfulResource link="http://" label="test" />
      </Section>
    </>
  );
}

export default App;
