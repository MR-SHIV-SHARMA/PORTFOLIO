import { Suspense, lazy, useEffect, useState, useRef } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer.jsx";

// Lazy Load Components
const Home = lazy(() => import("./components/home/Home.jsx"));
const Resume = lazy(() => import("./components/Resume/Resume.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const ProfileCard = lazy(() => import("./components/New_Profile/New_ProfileCard.jsx"));

// Intersection Observer Based Lazy Loader
const LazyComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Once loaded, stop observing
        }
      },
      { threshold: 0.1 } // 10% visible hone par load hoga
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {isVisible ? children : <div className="loading-placeholder">Loading...</div>}
    </div>
  );
};

function Layout() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyComponent>
              <Home />
            </LazyComponent>
          </Suspense>
        </section>
        <section id="about">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyComponent>
              <ProfileCard />
            </LazyComponent>
          </Suspense>
        </section>
        <section id="resume">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyComponent>
              <Resume />
            </LazyComponent>
          </Suspense>
        </section>
        <section id="projects">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyComponent>
              <Projects />
            </LazyComponent>
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyComponent>
              <Contact />
            </LazyComponent>
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
