import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";

export default function Home() {
  // Preload critical images
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage("/images/louise-viallesoubranne-5EhN4wbfvBc-unsplash.webp");
    preloadImage("/images/icons1.webp");
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden h-screen">
        <img
          src="/images/louise-viallesoubranne-5EhN4wbfvBc-unsplash.webp"
          alt="Background"
          loading="eager"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="p-2 2xs:px-[5%] lg:px-[9%]">
            <p className="text-base sm:text-lg md:text-xl leading-8 text-white">
              Hello!
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              I'm Shiv Sharma.
            </h2>
            <h3 className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl leading-8 text-white">
              Full-stack Developer.
            </h3>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white max-w-2xl">
              I am a web developer from Jaipur, Chaksu, currently living in my
              village, Khejdhi Bujurg. I enjoy creating everything from small
              business websites to rich, interactive web applications. Whether
              you are a business seeking a web presence or an employer looking
              to hire, feel free to get in touch with me here.
            </p>
            <div className="pt-[10%] flex justify-between items-center">
              <div className="flex flex-col-reverse">
                <div className="text-xl sm:text-2xl font-bold">
                  <Link
                    to="/#contact"
                    className="border-2 flex justify-center items-center sm:border-4 text-white p-1 sm:p-2 px-2 sm:px-4 rounded-full text-sm sm:text-base md:text-lg"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex flex-col-reverse pr-[20%] sm:pr-0">
                <div className="text-xl sm:text-2xl font-bold">
                  <Link className="flex items-center" to="/#about">
                    <p className="border-2 sm:border-4 text-white p-1 sm:p-2 px-2 sm:px-4 hidden sm:block rounded-full text-sm sm:text-base md:text-lg">
                      Start Tour
                    </p>
                    <img
                      src="/images/icons1.webp"
                      alt="Project Icon"
                      loading="lazy"
                      width="48"
                      height="48"
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2 text-white border-2 sm:border-4 rounded-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
