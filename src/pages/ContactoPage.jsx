import React from "react";

export const ContactoPage = () => {
  return (
    <div className="ContactoBackground">

      <div className="flex flex-col bg-[#4e35f2bb] rounded-3xl mx-24 mt-5 pb-32">

        <h1 className="py-3 text-center text-5xl font-bold text-[#EA8514]">
          ¡ Contactame !
        </h1>

        <div className=" flex justify-center mt-20" >
            <a href="mailto:juantor98@gmail.com">
            <img 
              className="w-40" 
              src="email.png" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};
