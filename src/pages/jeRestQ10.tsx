import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import ProgressBar from "@/components/ProgressBar";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q15rest(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/k854e463-467e-4515-b80e-1bf680be2da1";
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
         <Tracking currentQuestionNumber={10.1} path={BUTTON_PATH} />
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
                        <div className="max-w-[360px]">
                            <img className="w-full" src="jeRestQ10img.webp" alt="" />
                        </div>
                    <h1 className="text-[#371b48] font-bold text-[20px] text-left md:text-[32px]">¡Siguiente Nivel De Productividad!</h1>
                    <p className="text-[#371b48] text-[14px] md:text-[16px] sm:max-w-[567px] text-left">Próximo nivel de productividad! &quot;A pesar de la cantidad de herramientas de productividad en internet, sentí que necesitaba algo que realmente abordara los problemas personales que procrastino. Me alegra decir que eso es exactamente lo que hizo Virtue Map. En lugar de intentar TODO, sé exactamente lo que funciona para mí. No dudes en intentarlo si te sientes ansioso o deprimido por perder plazos o por no resolver problemas importantes de trabajo o de relación.&quot;</p>
                    
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[20px] gap-[22px] text-center px-8 w-full md:w-1/2">
                    <ButtonLink  href={BUTTON_PATH}><span className="max-w-[250px]">Continuar</span></ButtonLink>   
                    <BackButton to="/jde445c4-1ca6-4f14-9ee2-3e9c675b4556"></BackButton>           
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