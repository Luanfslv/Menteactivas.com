import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ButtonLink2 from "@/components/ButtonLink2";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q12(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/m1RestQ13";
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
        <Tracking currentQuestionNumber={12} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-between items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">12 </span> / 14</h1>
            </div>
            <ProgressBar>
                <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "81%"}}></div>
            </ProgressBar>
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-[108px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <img className="w-full" src="q12h.svg" alt="" />
                </div>
                <div className="mb-[20px] flex flex-col justify-center items-center">
                    <h1 className="text-[#6700a7] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px]">¿Qué hábitos o actividades comunes sueles procrastinar?</h1>
                    <p className="text-[#6700a7] font-extralight text-[15px] text-center">Elige todas las opciones que creas adecuadas para ti. Esto nos ayudará a personalizar tu plan según tus objetivos personales.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center sm:px-8 w-full">
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Para sentirme mejor conmigo mismo/a</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Mejorar mi salud</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Para establecer y lograr objetivos</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Llegar a ser como alguien que admiro</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Destacarme en el trabajo</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Liberarme de la ansiedad y depresión</span></ButtonLink2>
                    <ButtonLink2 href={BUTTON_PATH}><span className="">Mejorar mi relación</span></ButtonLink2> 
                    <ButtonLink  href={BUTTON_PATH}><span className="">Continuar</span></ButtonLink> 
                    <BackButton to="/k854e463-467e-4515-b80e-1bf680be2da1"></BackButton>                     
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