import ProfileCard from "./components/New_Profile/New_ProfileCard.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main className="">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <ProfileCard />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default Layout;
