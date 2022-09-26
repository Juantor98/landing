import React from 'react'

export const CardProyectos = () => {
  return (
      
    <div className="m-10 flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-[#240b5986] bg-[#4E35F2]">
    <img
      className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="javascript.png"
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
    </div>
  </div>
  )
}
