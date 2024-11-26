import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ProfileCard from "./components/New_Profile/New_ProfileCard.jsx";
import Footer from "./components/Footer/Footer.jsx"

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
        {/* <section id="footer">
          <Footer />
        </section> */}
      </main>
    </>
  );
}

export default Layout;
