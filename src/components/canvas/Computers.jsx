import React from "react";
// import CanvasLoader from '../Loader';
import devAbhiImage from '../devAbhi.png'; //Image

const ComputersCanvas = () => {
  return (
    <div className="text-center md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 xl:mt-150 lg:ml-0 lg:pt-0  pt-[405px] mr-[4px] ">
      <img
        src={devAbhiImage}
        alt="Developer Abhi"
        className="max-w-100 w-full h-auto md:max-w-full md:max-h-full xl:max-w-full lg:ml-6  xl:max-h-full sm:mt-10"
      />
      {/* <CanvasLoader /> */}
    </div>
  );
};

export default ComputersCanvas;
