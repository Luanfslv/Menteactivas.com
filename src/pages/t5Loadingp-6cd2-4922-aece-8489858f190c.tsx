import ButtonLink from "@/components/ButtonLink";
import Calculos from "@/components/Calculos";
import Loader from "@/components/Loader";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Q12LoadingPage(){
    
    const [show, setShow] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 500);

        return () => clearTimeout(timer);  // Limpe o timer se o componente for desmontado
    }, []);  // A lista de dependências vazia significa que este useEffect será executado apenas uma vez, semelhante a componentDidMount.


    const [loading, setLoading] = useState(true);
    const navigateToNextPage = () => {
        router.push('/u80bc188-cbc0-4fef-9d46-752c156321a9');
    }
    const handleComplete = () => {
        setLoading(false);
        setTimeout(navigateToNextPage, 6000);
        console.log("Loading completo!");
    };

    return(
    <>
     {show && (
    <section className="bg-[#fff] fadeIn">
        <div className="flex bg-cover bg-repeat py-5 justify-center items-center bg-bg-custom-bg">
            <div className="">
                <img src="/LogoPrincipal.png" alt="" />
            </div>
        </div>
        {/* loading  */}
            <div className="mt-24 mb-12">
                <div className="flex flex-col justify-center items-center">
                    <div id="wifi-loader">
                        <svg className="circle-outer" viewBox="0 0 86 86">
                            <circle className="back" cx="43" cy="43" r="40"></circle>
                            <circle className="front" cx="43" cy="43" r="40"></circle>
                            <circle className="new" cx="43" cy="43" r="40"></circle>
                        </svg>
                        <svg className="circle-middle" viewBox="0 0 60 60">
                            <circle className="back" cx="30" cy="30" r="27"></circle>
                            <circle className="front" cx="30" cy="30" r="27"></circle>
                        </svg>
                        <svg className="circle-inner" viewBox="0 0 34 34">
                            <circle className="back" cx="17" cy="17" r="14"></circle>
                            <circle className="front" cx="17" cy="17" r="14"></circle>
                        </svg>
                        <div className="text" data-text=""></div>
                    </div>
                </div>
            </div>
        {/* end loading  */}
            <div className=" flex flex-col justify-center items-center text-center">
                <div>
                    {loading ? <Loader onComplete={handleComplete} /> : <p className="font-medium text-xl text-[#2BB4C7]">¡Carga completa!</p>}
                </div>
                <h1 className="text-[#1d1d1f] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px] pt-2">Calculando tus resultados..</h1>
            </div>
            <div className="flex flex-col items-center justify-center my-6">
                <div className="text-center text-gray-400 text-lg gap-4 font-bold flex flex-col items-center justify-center max-w-[] mx-[15px]">
                    <Calculos />
                </div>
            </div>

        <div className="flex justify-center tex-center items-center text-black font-extralight text-[10px] bg-[#d7ffed] py-[15px]">
                <h1 className="">© COPYRIGHT 2023 – Todos los derechos reservados © Mente Activa</h1>
             </div>
    </section>
             )}
             
             
    </>
)} 
        {/* <div className="px-[20px] pb-[45px]">
            <div className="flex justify-between items-center p-[20px] sm:p-[40px] pt-[30px] md:pt-[70px]">
                    <img className="w-[68px] sm:w-[113px] md:w-[130px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                    <h1 className="text-black md:text-[25px] text-[17px]"><span className="font-bold">15 </span> / 17 </h1>
            </div> 
             <ProgressBar>
                <div className="h-full bg-[#f2a516] rounded-[2px]" style={{width: "90%"}}></div>
            </ProgressBar>
            <div className="flex justify-center items-center flex-col">
                <div className="mb-[20px] flex flex-col justify-center items-center">
                    <h1 className="text-[#6700a7] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px] pt-6">Sabemos que estás muy ocupado(a), así que tu plan solo necesita 5 minutos al día.</h1>
                        <div className="max-w-[360px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] my-[50px]">
                            <img className="w-[208px] sm:w-[300px] md:w-[340px]  h-auto" src="/Logo[menteguia(coruja)].png" alt="" />
                        </div>
                    <p className="text-[#6700a7] font-[200] text-[18px] md:max-w-[567px] text-center">Todo se trata de los pequeños cambios que llevan a grandes resultados.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-[10px] gap-[22px] text-center px-8 w-full md:w-1/2">
                <h1 className="text-[#6700a7] font-bold text-[24px] max-w-[360px] md:max-w-[540px] text-center md:text-[42px]">¿Estás listo?</h1>
                    <ButtonLink id="btn" href="/Q16"><span className="max-w-[250px]">Continuar</span></ButtonLink>                 
                </div>

            </div>
        </div> */}