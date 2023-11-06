import ButtonLink from "@/components/ButtonLink";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q4(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/t5Loadingp-6cd2-4922-aece-8489858f190c";
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 500);

        return () => clearTimeout(timer);  // Limpe o timer se o componente for desmontado
    }, []);  // A lista de dependências vazia significa que este useEffect será executado apenas uma vez, semelhante a componentDidMount.

    return(
    <>
     {show && (
    <section className="bg-[#ebffff] fadeIn">
        <Tracking currentQuestionNumber={15} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            {/* <div className="flex justify-between items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[25px] text-[17px]"><span className="sora-semibold">15 </span> / 17 </h1>
            </div> */}
            {/* <ProgressBar>
                <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "90%"}}></div>
            </ProgressBar> */}
            <div className="flex justify-center items-center flex-col">
                <div className="mb-[20px] flex flex-col justify-center items-center">
                    <h1 className="text-[#6700a7] sora-semibold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px] pt-6">Sabemos que estás muy ocupado(a), así que tu plan solo necesita 5 minutos al día.</h1>
                        <div className="max-w-[360px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] my-[50px]">
                            <img className="w-[208px] sm:w-[300px] md:w-[340px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                        </div>
                    <p className="text-[#6700a7] font-[200] text-[18px] md:max-w-[567px] text-center">Todo se trata de los pequeños cambios que llevan a grandes resultados.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[10px] gap-[22px] text-center px-8 w-full md:w-1/2">
                <h1 className="text-[#6700a7] sora-semibold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px]">¿Estás listo?</h1>
                    <ButtonLink  href={BUTTON_PATH}><span className="max-w-[250px]">Continuar</span></ButtonLink>                 
                </div>

            </div>
        </div>
        <div className="flex justify-center tex-center items-center text-black font-extralight text-[10px] bg-[#d7ffed] py-[15px]">
                <h1 className="">© COPYRIGHT 2023 – Todos los derechos reservados © Mente Activa</h1>
             </div>
    </section>
             )}
             
    </>
)} 