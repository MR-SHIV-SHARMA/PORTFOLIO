import React from "react";

function Footer() {
  return (
    <div className="p-2 2xs:px-[5%] lg:px-[9%] w-full bg-black text-white">
      <div className="border border-zinc-600 my-6" />

      {/* Footer Section */}
      <div className="flex flex-row justify-between items-center pb-12 ">
        <div className="font-bold text-xs sm:text-base">Ok, bye now.😊</div>
        <div className="font-bold text-xs sm:text-base flex justify-center items-center">
          &#169;Shiv's Universe-Shiv Prasad Sharma
        </div>
      </div>
    </div>
  );
}

export default Footer;
