import { Suspense, lazy, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer.jsx";

// Load Home component immediately (critical above-the-fold content)
import Home from "./components/home/Home.jsx";

// Lazy load other components with minimal delay
const Resume = lazy(() => import("./components/Resume/Resume.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const ProfileCard = lazy(() =>
  import("./components/New_Profile/New_ProfileCard.jsx")
);

// Fast loading fallback component
const QuickLoader = () => (
  <div className="flex items-center justify-center py-4">
    <div className="text-gray-500 text-xs">•••</div>
  </div>
);

// Optimized Suspense wrapper with minimal fallback
const FastSuspense = ({ children }) => (
  <Suspense fallback={<QuickLoader />}>
    <div className="quick-load">{children}</div>
  </Suspense>
);

function Layout() {
  // Preload project images globally when Layout mounts
  useEffect(() => {
    const projectImages = [
      "/images/pexels-marleneleppanen-17461673.webp",
      "/images/pexels_voitkevich_6214450.webp",
      "/images/pexels_ivan_samkov_4240497.webp",
      "/images/pexels_thgusstavo_2102587.webp",
      "/images/pexels_mateodavilah_13566177.webp"
    ];

    // Create a cache of images
    projectImages.forEach(src => {
      const img = new Image();
      img.src = src;
      // Force browser to cache
      img.style.position = 'absolute';
      img.style.left = '-9999px';
      img.style.visibility = 'hidden';
      document.body.appendChild(img);
      
      img.onload = () => {
        // Remove from DOM after loading
        if (img.parentNode) {
          img.parentNode.removeChild(img);
        }
      };
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Home loads immediately - no lazy loading */}
        <section id="home">
          <Home />
        </section>

        {/* Other components with fast lazy loading */}
        <section id="about">
          <FastSuspense>
            <ProfileCard />
          </FastSuspense>
        </section>

        <section id="resume">
          <FastSuspense>
            <Resume />
          </FastSuspense>
        </section>

        <section id="projects">
          <FastSuspense>
            <Projects />
          </FastSuspense>
        </section>

        <section id="contact">
          <FastSuspense>
            <Contact />
          </FastSuspense>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
