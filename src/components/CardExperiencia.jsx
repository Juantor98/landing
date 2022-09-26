
export const CardExperiencia = ({Titulo, Descripcion}) => {
  return (
    <div className="bg-[#ea861494] w-72 h-72 rounded-full pt-24 m-5">
      <h1 className="font-bold text-2xl">{Titulo}</h1>
      <h1 className="pt-4">{Descripcion}</h1>
    </div>
  )
}
