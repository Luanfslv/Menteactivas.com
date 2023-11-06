import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import Tracking from "@/components/Tracking";
import { useEffect, useState } from "react";

export default function Q1(){
    const [show, setShow] = useState(false);
    const BUTTON_PATH = "/b5d9e839-db92-4216-a7cc-aa3d6d738540";
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10);

        return () => clearTimeout(timer);  // Limpe o timer se o componente for desmontado
    }, []);  // A lista de dependências vazia significa que este useEffect será executado apenas uma vez, semelhante a componentDidMount.

    return(
    <>
     {show && (
    <section className="bg-[#ebffff] fadeIn">
        <Tracking currentQuestionNumber={1} path={BUTTON_PATH} />

        <div className="px-[20px] pb-[45px]">
            <div className="flex justify-between md:justify-around items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[30px] text-[17px] "><span className="font-bold">1 </span> / 14</h1>
                
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-[108px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <img className="w-full" src="q1h.svg" alt="" />
                </div>
                <div className="mb-[20px]">
                    <h1 className="text-[#6700a7] font-bold text-[24px] md:text-[42px]">¿Cuántos años tienes?</h1>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[40px] gap-[22px] text-center px-8 w-full">
                    <ButtonLink href={BUTTON_PATH}>18 - 24 años</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>25 - 34 años</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>35 - 44 años</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>45 - 54 años</ButtonLink>
                    <ButtonLink  href={BUTTON_PATH}>55 + años</ButtonLink>
                    <BackButton to="/"></BackButton>
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