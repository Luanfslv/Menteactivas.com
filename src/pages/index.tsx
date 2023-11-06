import Link from "next/link";

export default function Home() {
  return(
    <>
      <section className="bg-[#ebffff] p-[20px]">
        <div></div>
        <div className="flex justify-center items-center pt-[20px] md:pt-[80px] md:pb-[30px]">
          <img src="Logo[menteguia(coruja)].png" alt="" className="w-[131px] h-auto md:w-[185px]" />
        </div>        
    <div className="flex flex-col lg:flex-row justify-center items-center lg:max-h-[521px] lg:mb-[220px] lg:mx-[0px] xl:mx-[50px]">
        {/* img  */}
        <div className="md:min-w-[428px] flex justify-center py-[20px]">
          <div className="max-w-[327px] sm:max-w-[228px] md:max-w-[428px]">
              <img className="w-full shrink" src="ilustracaoHome.webp" alt="Illustration Description" />
          </div>
      </div>
      {/* content  */}
      <div className="max-w-[631px] whitespace-normal lg:pl-[30px]">
        <div className="flex justify-center">
          <div className="flex flex-col justify-start gap-[12px] items-start max-w-[366px] max-w-[771px]">
            <h2 className="text-[#16697a] text-[23px] md:text-[43px] leading-[1.1em]">Su plan para eliminar la procrastinación, la ansiedad y la baja autoestima.</h2>
            <h1 className="text-[#6700a7] text-[17px] md:text-[20px] leading-[1.3em] font-light">Responde a una prueba rápida y recibe tu plan anti-procrastinación y aplasta tus objetivos definidos con mucha concentración, energía y fuerza de voluntad.</h1>
            <div className="">
              <h1 className="text-[#6700a7] font-bold text-[17px] mb-[35px] md:text-[20px]">Comienza seleccionando tu género:</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:flex-wrap">
            <Link href="/a18929170-0fce-4e8c-850f-476a2f91cad4" className="rounded-[60px] text-white text-[15px] font-bold bg-[#38299f] hover:bg-[#f4e2ff] hover:text-[#38299f] sm:px-[11.33%] px-[33.33%] pt-[15px] pb-[15px] block text-center">Masculino</Link>
            <Link href="/a18929170-0fce-4e8c-850f-476a2f91cad4" className="rounded-[60px] text-white text-[15px] font-bold bg-[#b845ff] hover:bg-[#f4e2ff] hover:text-[#b845ff] sm:px-[11.33%] px-[33.33%] pt-[15px] pb-[15px] block text-center">Femenino</Link>
            <Link href="/a18929170-0fce-4e8c-850f-476a2f91cad4" className="text-center items-center sm:items-start sm:text-start text-[#16697a] font-bold sm:px-[11.33%] px-[33.33%] lg:px-[0px] pt-[15px] pb-[15px] md:text-left">Otros</Link>
        </div>
            <div className=" flex justify-center lg:justify-left lg:text-left text-center pt-[11px]">
              <h3 className="text-[#6700a7] text-[13px] max-w-[366px] md:max-w-[400px] font-semibold">
              © 2023 MenteGuia. Todos los Derechos Reservados. <br />
              Aviso: Los resultados pueden variar de persona a persona.
              </h3>
            </div>
      </div>
    </div>
      </section>
      <footer className="bg-[#d7ffed] text-center py-[15px]">
        <p className="font-light text-black text-[10px] lg:text-[11px]">INSTITUTO SER & SERPLAY | TODOS LOS DERECHOS RESERVADOS. | 2022</p>
      </footer>
    </>
  )
}