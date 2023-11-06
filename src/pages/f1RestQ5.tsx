import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function F1RestQ5(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/f4a73b2d-47cc-4e21-9893-d23f8d7dd09c";
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
        <Tracking currentQuestionNumber={5.1} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-center items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[90px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    {/* <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">6 </span> / 11 </h1> */}
            </div>
            <ProgressBar>
                {/* <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "50%"}}></div> */}
            </ProgressBar>
            <div className="text-[#6700a7] flex text-center flex-col mt-4">
                <h1 className="text-[25px] md:text-[35px]">
                    ¡LA PROCRASTINACIÓN NO ES PEREZA!
                </h1>
                <div className="mb-[20px] flex items-center justify-center w-full">
                    <p className="text-[#6700a7ba] font-extralight text-[15px] max-w-[600px] text-center">Con pocas respuestas podemos llegar a la conclusión de que <span className="sora-semibold">sufres de ansiedad</span> y que con el tiempo esto empeorará y evitará que ALCANCES tus objetivos.</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-[300px] lg:max-w-[250px]">
                    <img className="w-full" src="faRestQ5.webp" alt="" />
                </div>
                <div className="mb-[20px]">
                    <p className="text-[#6700a7] sora-semibold  text-[18px] max-w-[360px] md:max-w-[540px] text-center md:text-[30px]">Pero no te desanimes, estamos aquí para revertir esta realidad de inmediato haciéndote consciente de tu problema y brindándote el camino con la respuesta para la cura de esta enfermedad.</p>
                    {/* <p className="text-[#6700a7] font-extralight text-[15px] text-center">Con pocas respuestas podemos llegar a la conclusión de que sufres de ansiedad y que con el tiempo esto empeorará y evitará que ALCANCES tus objetivos.</p> */}
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center px-8 w-full">
                    <ButtonLink href={BUTTON_PATH}><span className="max-w-[250px]">Continuar</span></ButtonLink>
                    <BackButton to="/gf08720d-2aa8-4dac-aea0-adbb9b432376"></BackButton>
                    
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