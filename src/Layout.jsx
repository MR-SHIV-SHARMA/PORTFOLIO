import { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer.jsx";

const Home = lazy(() => import("./components/home/Home.jsx"));
const Resume = lazy(() => import("./components/Resume/Resume.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const ProfileCard = lazy(
  () => import("./components/New_Profile/New_ProfileCard.jsx")
);

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
