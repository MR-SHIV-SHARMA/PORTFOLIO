import { useState } from "react";
import { FiDownload } from "react-icons/fi";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center">
      <div className="pt-10"></div>
      <div className="text-center mt-10">
        <h1 className="text-4xl text-white">Resume</h1>
        <a
          href={fileUrl}
          download="CV.pdf"
          className="mt-4 flex items-center justify-center text-white hover:text-blue-300"
        >
          <FiDownload className="mr-2" size={24} />
          Download
        </a>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-4xl border-2 border-white">
          <p className="bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi
            corporis facilis? Commodi blanditiis fuga ullam optio, recusandae
            voluptate beatae unde molestias, delectus incidunt, quae neque
            perspiciatis error possimus laudantium rem ipsam? Corrupti ipsa
            repudiandae eveniet consectetur itaque ipsam accusantium iure
            deleniti sint excepturi? Porro iste praesentium dolorem vitae, eius,
            temporibus, quaerat repellendus mollitia commodi quisquam pariatur a
            vel assumenda minus architecto aut eligendi. Deleniti sint placeat
            maxime inventore. Reprehenderit nihil consequatur fugit ex autem
            provident, nemo amet officiis illum dolores debitis tempore modi
            veritatis temporibus aut, delectus accusantium, deleniti facilis
            quae ab! Eveniet magnam, animi delectus perspiciatis molestiae
            temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
