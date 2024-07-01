import { NavLink } from "react-router-dom";
import circleplay from "/src/components/home/play-circle.png";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-700 min-h-screen w-full">
      <img
        src="/src/components/home/louise-viallesoubranne-5EhN4wbfvBc-unsplash.jpg"
        alt=""
        className="absolute inset-0 -z-10 min-h-screen w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>{" "}
      {/* Add this line for the black overlay */}
      <div className="mx-auto mt-28 sm:mt-56  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-lg leading-8 text-white">Hello!</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            I&apos;m shiv sharma.
          </h2>
          <h3 className="mt-4 text-lg leading-8 text-white">
            Full-stack developer.
          </h3>
          <p className="mt-4 text-lg leading-8 text-white">
            {/* Welcome! Full-stack Developer crafting high-performance web apps.
            <br className="hidden" />
            Let&apos;s create something extraordinary! */}
            I am a web developer from Jaipur, Chaksu, currently living in my
            village, Khejdhi Bujurg. I enjoy creating everything from small
            business websites to rich, interactive web applications. Whether you
            are a business seeking a web presence or an employer looking to
            hire, you can get in touch with me here.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-16 mb-6 sm:mb-0 grid grid-cols-2 gap-8 items-center justify-center sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dd className="text-2xl font-bold ">
                <NavLink
                  className="bg-gray-600 text-white p-2 px-4 rounded-full "
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dd className="text-2xl font-bold ">
                <NavLink className=" flex " to="/About">
                  <p className="bg-gray-600 text-white p-2 px-4 hidden sm:block rounded-full">
                    Start Tour
                  </p>
                  <img
                    src={circleplay}
                    alt="Project Icon"
                    className="w-12 h-12 ml-2"
                  />
                </NavLink>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
