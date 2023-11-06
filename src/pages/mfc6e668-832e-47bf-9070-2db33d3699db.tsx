import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ButtonLink2 from "@/components/ButtonLink2";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q13(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/r3590ff6-1b52-429e-b321-a6919884edb4";
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
                <Tracking currentQuestionNumber={13} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-between items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">13 </span> / 14</h1>
            </div>
            <ProgressBar>
                <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "88%"}}></div>
            </ProgressBar>
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-[108px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <img className="w-full" src="q13h.svg" alt="" />
                </div>
                <div className="mb-[20px]">
                    <h1 className="text-[#6700a7] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px]">Dinos qué te gustaría incluir en tu plan.</h1>
                    {/* <p className="text-[#6700a7] font-extralight text-[15px] text-center">¿Estás de acuerdo con la siguiente afirmación?</p> */}
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center md:px-8 w-full">
                    <ButtonLink2><span>productividade</span></ButtonLink2>
                    <ButtonLink2><span>autodisciplina</span></ButtonLink2>
                    <ButtonLink2><span>fuerza de voluntad</span></ButtonLink2>
                    <ButtonLink2><span>eliminar la ansiedad y la depresión</span></ButtonLink2>
                    <ButtonLink2><span>motivación</span></ButtonLink2>
                    <ButtonLink2><span>dejar los malos hábitos</span></ButtonLink2>
                    <ButtonLink href={BUTTON_PATH}><span>Continuar</span></ButtonLink>
                    <BackButton to="/m1RestQ13"></BackButton>   
                                     
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