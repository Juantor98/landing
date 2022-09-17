import React from "react";

export const InicioPage = () => {
  return (
    <div className="inicioBackGround">
      <div className="bg-[#2f1073ce] py-8 px-10 text-center rounded-3xl shadow-xl m-auto w-1/2 mt-16 mb-16">
        <img
          className="-mt-20 w-1/4 shadow-xl rounded-full mb-4 mx-auto"
          src="FotoPerfil.jpg"
        />
        <p className="text-2xl font-bold text-white mb-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          ullam deserunt obcaecati, velit nesciunt ipsa eum distinctio eos
          adipisci repellendus modi dolor maiores mollitia facilis voluptate
          vitae deleniti fugit placeat.
        </p>
      </div>
    </div>
  );
};
