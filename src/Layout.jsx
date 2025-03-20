import { Suspense, lazy, useEffect, useState, useRef } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer.jsx";

// Lazy Load Components (With Dynamic Imports)
const Home = lazy(() => import("./components/home/Home.jsx"));
const Resume = lazy(() => import("./components/Resume/Resume.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const ProfileCard = lazy(
  () => import("./components/New_Profile/New_ProfileCard.jsx")
);

// Intersection Observer for Lazy Loading
const LazyComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // 20% visibility required
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {isVisible ? (
        children
      ) : (
        <div className="loading-placeholder">Loading...</div>
      )}
    </div>
  );
};

// Optimized Suspense Component for Better Performance
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className="loading">Loading...</div>}>
    {children}
  </Suspense>
);

function Layout() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <SuspenseWrapper>
            <LazyComponent>
              <Home />
            </LazyComponent>
          </SuspenseWrapper>
        </section>

        <section id="about">
          <SuspenseWrapper>
            <LazyComponent>
              <ProfileCard />
            </LazyComponent>
          </SuspenseWrapper>
        </section>

        <section id="resume">
          <SuspenseWrapper>
            <LazyComponent>
              <Resume />
            </LazyComponent>
          </SuspenseWrapper>
        </section>

        <section id="projects">
          <SuspenseWrapper>
            <LazyComponent>
              <Projects />
            </LazyComponent>
          </SuspenseWrapper>
        </section>

        <section id="contact">
          <SuspenseWrapper>
            <LazyComponent>
              <Contact />
            </LazyComponent>
          </SuspenseWrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
