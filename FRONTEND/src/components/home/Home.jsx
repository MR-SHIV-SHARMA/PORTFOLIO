import { NavLink } from "react-router-dom";
import icons1 from "/src/components/home/icons1.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/louise-viallesoubranne-5EhN4wbfvBc-unsplash.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-700 h-screen w-full">
        {imageLoaded ? (
          <img
            src="/images/louise-viallesoubranne-5EhN4wbfvBc-unsplash.jpg"
            alt="Background"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-gray-300 animate-pulse"></div>
        )}
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl lg:mx-0">
              <p className="text-base sm:text-lg md:text-xl leading-8 text-white">
                Hello!
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                I'm Shiv Sharma.
              </h2>
              <h3 className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl leading-8 text-white">
                Full-stack Developer.
              </h3>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white max-w-xl">
                I am a web developer from Jaipur, Chaksu, currently living in my
                village, Khejdhi Bujurg. I enjoy creating everything from small
                business websites to rich, interactive web applications. Whether
                you are a business seeking a web presence or an employer looking
                to hire, you can get in touch with me here.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse">
                  <dd className="text-xl sm:text-2xl font-bold">
                    <NavLink
                      className="border-2 sm:border-4 text-white p-1 sm:p-2 px-2 sm:px-4 rounded-full text-sm sm:text-base md:text-lg"
                      to="/Contact"
                    >
                      Contact
                    </NavLink>
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dd className="text-xl sm:text-2xl font-bold">
                    <NavLink className="flex items-center" to="/About">
                      <p className="border-2 sm:border-4 text-white p-1 sm:p-2 px-2 sm:px-4 hidden sm:block rounded-full text-sm sm:text-base md:text-lg">
                        Start Tour
                      </p>
                      <img
                        src={icons1}
                        alt="Project Icon"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2 text-white border-2 sm:border-4 rounded-full"
                      />
                    </NavLink>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
