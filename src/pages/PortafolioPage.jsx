import React from "react";

export const PortafolioPage = () => {
  return (
    <div className="PortafolioBackground">
      <h1 className="bg-[#240b59c4] text-[#EA8514] py-4 mx-96 rounded-3xl text-5xl font-bold ">
        Mi Portafolio
      </h1>

      <div className="flex justify-center items-center w-full h-full">
        <div className="m-10 flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-[#240b5986] bg-[#4E35F2]">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="superheroe.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Biblioteca de Superhéroes
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Una biblioteca desarrollada en React lista para que puedas
              desfrutas de las caracteristicas de tus héroes favortidos de los
              dos mejores universos que existen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
