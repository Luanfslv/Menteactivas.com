import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q15rest(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/mfc6e668-832e-47bf-9070-2db33d3699db";
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
         <Tracking currentQuestionNumber={13.1} path={BUTTON_PATH} />
        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-center items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    {/* <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">7 </span> / 11 </h1> */}
            </div>
            <ProgressBar>
                {/* <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "60%"}}></div> */}
            </ProgressBar>
            <div className="flex justify-center items-center flex-col">
                <div className="mb-[20px] flex flex-col justify-center items-center">
                    <h1 className="text-[#6700a7] font-bold text-[25px] max-w-[400px] md:max-w-[540px] text-center md:text-[42px]">El Mente Activa se basa en ciencias del comportamiento.</h1>
                        <div className="max-w-[360px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                            <img className="w-full rounded-full" src="psicologo.jpeg" alt="" />
                        </div>
                    <p className="text-[#6700a7] text-[14px] md:text-[20px] md:max-w-[567px] text-center">Ofrecemos planes diseñados por nuestros psicólogos, consejeros profesionales y expertos en comportamiento para cambiar tus hábitos a largo plazo y desde adentro.</p>
                    
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center px-8 w-full md:w-1/2">
                    <ButtonLink  href={BUTTON_PATH}><span className="max-w-[250px]">Continuar</span></ButtonLink>   
                    <BackButton to="/l64ecc30-765a-4354-aa74-7eb9cbc450a7"></BackButton>           
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