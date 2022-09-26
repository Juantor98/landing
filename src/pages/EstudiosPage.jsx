import React from "react";

export const EstudiosPage = () => {
  return (
    <div className="ConocimientoBackGround">
      <h1 className="bg-[#240b59c4] text-[#EA8514] py-4 mx-96 rounded-3xl text-5xl font-bold ">Mis Estudios</h1>

      <div className="flex justify-center items-center mt-20">
        <div className="bg-[#ea861494] w-[300px] h-[380px] rounded-[30px] m-8">
          <img
            className="-mt-16 w-1/3 mb-4 mx-auto"
            src="IconAstronautPlanet.png"
          />
          <div className="flex mt-[35%]">
            <img 
              className="w-1/3 mb-4 mx-auto" 
              src="html-file.png" 
            />
            <img
              className="w-1/3 mb-4 mx-auto"
              src="css-file-format.png"
            />
          </div>
        </div>
        <div className="bg-[#ea861494] w-[300px] h-[380px] rounded-[30px] m-8">
          <img
            className="-mt-16 w-1/3 mb-4 mx-auto"
            src="IconAstronautWalking.png"
          />
          <div className="flex mt-[35%]">
            <img 
              className="w-1/3 mb-4 mx-auto" 
              src="javascript.png" 
            />
            <img
              className="w-1/3 mb-4 mx-auto"
              src="react.png"
            />
          </div>
        </div>
        <div className="bg-[#ea861494] w-[300px] h-[380px] rounded-[30px] m-8">
          <img
            className="-mt-16 w-1/3 mb-4 mx-auto"
            src="IconAstronautFishing.png"
          />
          <div className="flex mt-[35%]">
            <img 
              className="w-1/3 mb-4 mx-auto" 
              src="database.png" 
            />
            <img
              className="w-1/3 mb-4 mx-auto"
              src="hashtag.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
