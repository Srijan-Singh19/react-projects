import "./App.css";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  );
}