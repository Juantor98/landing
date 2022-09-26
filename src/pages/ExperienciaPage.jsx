import React from "react";
import { CardExperiencia } from "../components/CardExperiencia";
import {experiencias} from "../database/experiencia"


export const ExperienciaPage = () => {

  return (
    <div className="ExperienciaBackground">
      <h1 className="bg-[#240b59c4] py-3 mx-96 rounded-3xl text-5xl font-bold text-[#EA8514]">
        Mi experiencia
      </h1>

      <div className="bg-[#4e35f2bb] rounded-3xl mx-24 mt-5 p-24">
        
        <div className="flex justify-center items-center w-full h-full">
          {experiencias.map((experiencia) => (
            <div key={experiencia.id}>
              <CardExperiencia 
                Titulo={experiencia.titulo}
                Descripcion={experiencia.descripcion}
              />
            </div>
          ))}        
        </div>
      </div>
    </div>
  );
};
