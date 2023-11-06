import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q5(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/f1RestQ5";
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
        <Tracking currentQuestionNumber={5} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-between items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">5 </span> / 14</h1>
            </div>
            <ProgressBar>
                <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "28%"}}></div>
            </ProgressBar>
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-[108px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <img className="w-full" src="q5h.webp" alt="" />
                </div>
                <div className="mb-[20px]">
                    <h1 className="text-[#6700a7] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px]">¿Cuáles de las opciones te causan más ansiedad?</h1>
                    {/* <p className="text-[#6700a7] font-extralight text-[15px] text-center">¿Estás de acuerdo con la siguiente afirmación?</p> */}
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center px-8 w-full">
                    <ButtonLink href={BUTTON_PATH}>Personas</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>Ambientes</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>Ambos</ButtonLink>
                    <BackButton to="/d016e9ab-6f27-4e4e-839b-c08ca4e794ab"></BackButton>
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