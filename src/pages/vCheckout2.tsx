import Timer from "@/components/Timer";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
export default function Checkout(){
    
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 500);

        return () => clearTimeout(timer);  // Limpe o timer se o componente for desmontado
    }, []);  // A lista de dependências vazia significa que este useEffect será executado apenas uma vez, semelhante a componentDidMount.
    const targetSectionRef = useRef<HTMLElement | null>(null);
    const handleButtonClick = () => {
        if (targetSectionRef.current) {
          targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
    <>
     {show && (
        <>
        <header className="hidden lg:block">
        <div className="flex">
                <h1 
                style={{textShadow: '2px 2px #000'}}
                className="font-black text-[#fff] text-center text-[150px]">
                    403 <br /> only available in mobile device
                </h1>
            </div>
        </header>
        <main className="lg:hidden block">
        <nav className="flex justify-between px-[12px] bg-[#ffffff] items-center mb-[12px] fixed top-0 left-0 w-full shadow-md z-50">
                <div className="flex justify-center max-w-[100px] items-center py-2">
                    <img className="w-full" src="Logo[menteactiva(coruja)].svg" alt="" />
                </div>
                <div className="flex px-[12px]">
                    <a onClick={handleButtonClick} className="font-[600] mt-[6px] px-[20px] text-[13px] bg-[#348aa2] text-white text-center rounded-full py-[9px] ">Comprar Mi Plan</a>
                </div>
            </nav>
        <section className="bg-[#fff] fadeIn pt-[70x]">
        <section className="pt-[70px]">
            <div className="p-[10px]">
                <h1 className="max-w-[350px] sora-semibold text-[32px] p-[10px] leading-[40px] text-[#182613] font-semibold">
                 Obtén tu plan antiprocrastinación y verás los resultados en el primer mes
                </h1>
                <p className="font-[350] p-[10px] text-[#3b4238]">La herramienta personalizada de motivación y productividad más popular. ¡Hemos diseñado más de <span className="sora-semibold text-[#eb6142]">154 200</span> planes!</p>
                <div className="text-[13px] items-center flex gap-2 font-[260]"><img src="ratingstar.webp" className="w-[98px] mt-[11px] h-[17px]" alt="" /> <h5 className="font-semibold">4.7 / 5 <span className="text-3xl"> . </span> Más de 5000 reseñas</h5></div>
            </div>
        </section>
        <section>
            <div className="bg-blue-800 py-[10px] text-white flex items-center gap-1 justify-center">
                <p className="text-center font-[250] text-[14px]">
                    Ahorra un bonus! La oferta se vence en: </p> 
                <Timer initialMinutes={15} />
            </div>
        </section>
        <section className="py-[30px] bg-[#f6feff] px-[20px] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-12 justify-center">
                <h1 className="text-[#00202b] text-center text-[23px] font-[700]">¡Por tiempo limitado, accede a estos increíbles bonos gratis!</h1>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] w-full relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad1.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Proyecto Einstein - Aprende la manera correcta de aprender <span className="text-red-600"><s>($97)</s></span></h1>
                    <p className="font-[250] text-[15px]">Descubrirás cómo aumentar tu capacidad de aprendizaje y retener información con más facilidad. ¡Imagina cómo esto puede cambiar tu vida, tanto personal como profesionalmente!</p>
                </div>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] w-full relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad2.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Selección de los mejores nootrópicos naturales <span className="text-red-600"><s>($97)</s></span></h1>
                    <p className="font-[250] text-[15px]">Recibirás una lista de sustancias naturales que pueden mejorar tu rendimiento cognitivo, incrementando tu concentración, memoria y capacidad de aprendizaje.</p>
                </div>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad3.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Audios de ENFOQUE y PRODUCTIVIDAD<span className="text-red-600"><s>($47)</s></span></h1>
                    <p className="font-[250] text-[15px]">Los audios de ENFOQUE y PRODUCTIVIDAD son una herramienta esencial para ayudarte a mantener tu concentración y aumentar tu productividad.</p>
                </div>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad4.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Ruta de la Libertad Financiera en 10 Pasos <span className="text-red-600"><s>($7)</s></span></h1>
                    <p className="font-[250] text-[15px]">Una guía práctica y directa para llevarte por un viaje de 10 etapas, llevándote de la duda financiera a la independencia y estabilidad que mereces.</p>
                </div>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad5.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Motivación 365<span className="text-red-600"><s>($97)</s></span></h1>
                    <p className="font-[250] text-[15px]">Basado en principios neurocientíficos, esta guía ha sido elaborada para enseñarte a activar y mantener la motivación diaria.</p>
                </div>
                <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[180px] relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="BonusIpad6.webp" alt="" className="absolute top-0 -mt-[20px] bottom-0  sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Maestro de las Emociones <span className="text-red-600"><s>($197)</s></span></h1>
                    <p className="font-[250] text-[15px]">Descubre estrategias para gestionar y potenciar tus emociones. Mantente equilibrado y enfocado ante cualquier desafío.</p>
                </div>
                
            </div>
        </section>
        {/* cards payment  */}
        <section  className="px-[10px] py-[15px] pb-[35px] bg-[#CDD2FF]">
        <div 
                style={{boxShadow:'0 0 8px 0 rgba(0,0,0,.11)'}}
                className="bg-[#fff] p-[25px] pt-[200px] items-center rounded-[16px] relative z-10 flex flex-col gap-6 justify-center text-left">
                    <img 
                    style={{filter:'brightness( 150% ) contrast( 128% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )'}}
                    src="pacotecombo.png" alt="" className="absolute w-[264px] top-[10%] -mt-[90px] bottom-0 left-[14%] sm:left-[30%]" />
                    <h1 className="font-[700] text-[18px]">Todo esto por el precio más accesible, ya que lo que queremos es tu resultado.</h1>
                    <p className="font-[250] text-[15px] max-w-[400px] text-left sm:text-center">Además de esta oferta completa, puedes contar con nuestro apoyo dedicado para ayudarte en tu camino de crecimiento. Nuestro equipo de expertos estará disponible para responder a todas tus preguntas y brindarte orientación, para que aproveches al máximo tu plan personalizado.</p>
                </div>
        <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center mb-12 bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Premium</p>
                    <img src="maspopular.svg" alt="" className="w-[77px]" />
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.66 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>$159.99</s> </span>  Plan Completo con Todos los Bonos</p>
                </div> 
                <div className="w-full flex  md:justify-center relative">
                    <a className="w-full flex justify-center" href="https://pay.hotmart.com/T88050307T?off=ocrhieqp&checkoutMode=10">
                        <button className="font-[600] mt-[12px] bg-[#ec7e00] text-white  text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">12,90 Promoción limitada</button>
                    </a>
                    <img src="recomendad.webp" alt="" className="w-[250px] absolute top-[70%] left-0 right-0 bottom-0" />
                </div>
            </div>
            <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center  bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Súper</p>
                    
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.56 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>$99.99</s> </span> Plan con 3 bonos, seguimiento y grupo</p>
                </div> 
                <div className="w-full flex relative md:justify-center">
                    <a
                    href="https://pay.hotmart.com/T88050307T?off=8dnp3ns3&checkoutMode=10"
                    className="font-[600] mt-[12px] bg-[#ec7e00] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">Ahorra $10,90 Ahorra
                    </a>
                </div>    
            </div>
            <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Básico</p>
                    <img src="mejorvalor.svg" alt="" className="w-[77px]" />
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.43 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>59.99</s> </span>  Plan sin Bonos</p>
                </div> 
                <div className="w-full flex relative md:justify-center">
                    <a
                    href="https://pay.hotmart.com/T88050307T?off=8gy5dlo5"
                    className="font-[600] mt-[12px] bg-[#ec7e00] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">Ahorra $9.90 Ahorra
                    </a>
                </div>    
            </div>
            
           
            <div className="mb-6">
                <p className="text-[12px] text-center sora-light">Al escoger un método de pago, aceptas los Términos y condiciones y la Política de privacidad</p>
            </div>
            <div className="flex items-center mb-6">
                <img src="garantiaselo.svg" alt="" className="m-[15px]" />
                <div className="flex flex-col gap-1">
                    <p className="sora-semibold text-[14px]">GARANTIZADO: SIN RIESGOS</p>
                    <p className="text-[12px] sora-light">Cancela en cualquier momento para queno te cobremos el precio completo del programa</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img src="visa.svg" alt="" className="" />
            </div>
        </section>
        <section className="px-[20px] pb-8 bg-[#CDD2FF]">
            <div className="flex flex-col justify-center items-center">
                <p className="sora-semibold text-[24px] max-w-[340px] mb-4">A los usuarios les encanta nuestro plan</p>
                <div className="flex justify-center items-center mb-4">
                    <img src="corazo.svg" alt="" className="max-w-[197px]" />
                </div>
                <div className="p-[20px] flex flex-col w-full rounded-[16px] bg-[#fff] border border-[#ddebd8]">
                   <div className="flex w-full justify-between">
                    <div className="flex items-center gap-3">
                        <img src="rafareview.webp" alt="" className="w-[40px]" />
                        <div className="">
                            <p className="text-[14px] sora-semibold">Rafaela De Santos</p>
                            <p className="text-[12px] sora-light">@amanshuir1</p>
                        </div>
                    </div>
                    <div className="">
                        <img src="insta.svg" alt="" className="" />
                    </div>
                   </div>
                    <div className="pt-[15px]">
                        <p className="sora-light text-[14px]">!Ojalá hubiera sabido cuál era mi tipo de procrastinación hace algunos años, esto fue muy eficaz. Obtuve mi trabajo soñado un mes y medio después de terminar este plan. ¡Gracias, Mente Activa!</p>
                    </div>
                </div>
                <div className="p-[20px] mt-6 flex flex-col w-full rounded-[16px] bg-[#fff] border border-[#ddebd8]">
                   <div className="flex w-full justify-between">
                    <div className="flex items-center gap-3">
                        <img src="estereview.webp" alt="" className="w-[40px]" />
                        <div className="">
                            <p className="text-[14px] sora-semibold">Estéban Arenas</p>
                            <p className="text-[12px] sora-light">@estre3na</p>
                        </div>
                    </div>
                    <div className="">
                        <img src="insta.svg" alt="" className="" />
                    </div>
                   </div>
                    <div className="pt-[15px]">
                        <p className="sora-light text-[14px]">Pensé que esto solo me ayudaría a eliminar la procrastinación, pero hizo mucho más. Después de terminar este plan, llevé mi carrera y mis relaciones a un nuevo nivel.</p>
                    </div>
                </div>
                <div className="p-[20px] flex flex-col w-full mt-6 rounded-[16px] bg-[#fff] border border-[#ddebd8]">
                   <div className="flex w-full justify-between">
                    <div className="flex items-center gap-3">
                        <img src="nohe.webp" alt="" className="w-[40px]" />
                        <div className="">
                            <p className="text-[14px] sora-semibold">Nohemi Castaneda</p>
                            <p className="text-[12px] sora-light">@cas111an</p>
                        </div>
                    </div>
                    <div className="">
                        <img src="insta.svg" alt="" className="" />
                    </div>
                   </div>
                    <div className="pt-[15px]">
                        <p className="sora-light text-[14px]">Lo que más me gusta de este plan es que solo me toma 10-15 minutos y siento que me vuelvo más y más productiva CADA DÍA sin esforzarme.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-[#16697a] border-t border-b px-[20px] py-[30px] flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <img src="selogarantia.webp" alt="" className="w-full max-w-[244px] sm:max-w-[400px]" />
                <h1 className="text-[#e6fbdf] text-[25px] font-[600] text-center">Satisfacción Garantizada</h1>
                <p className="text-[#fff] text-[300] text-[16px]">Si estás pensando <span className="sora-semibold">“¿y si la Guía Antiprocrastinación no funciona para mí?”</span>.</p>
                <p className="text-[#fff] text-[300] text-[16px]">Queda tranquilo, podrás <span className="sora-semibold">probar el producto por 07 días</span> y disfrutar de los beneficios que aporta a tu vida.</p>
                <p className="text-[#fff] text-[300] text-[16px]">Pero si aún así consideras que este curso no es para ti, simplemente contáctanos y <span className="sora-semibold">pide tu dinero de vuelta</span>.</p>
                <p className="text-[#fff] text-[700] text-[16px]">¡Te devolvemos el 100% de tu dinero!</p>
            </div>
        </section>
        <section className="bg-[#f6f6f7] border-[#90b9b9] border text-black py-[30px] px-[20px]">
            <div className="felx flex-col justify-center ">
                <h1 className="text-[#3B4238] text-[23px] font-[800] text-center pb-[30px]">Muchas personas nos preguntan</h1>
                <div className="border border-white rounded-[10px] p-[20px] flex flex-col bg-[#D8EBEA]">
                    <div className="flex flex-col gap-5 border-b pb-5 ">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]">¿Qué es la Guía Antiprocrastinación?</h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]">Es un programa de Mente Activa, establecido paso a paso basado en la TCC (Terapia Cognitivo-Conductual) para que superes la procrastinación, aumentes la fuerza de voluntad y te conviertas en tu mejor versión.</p>
                    </div>
                    <div className="flex flex-col gap-5 border-b pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]"> ¿Qué voy a recibir? </h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]"> Recibirás un conjunto de actividades y conocimientos diariamente, a través de una plataforma donde encontrarás todos los contenidos de manera organizada.  </p>
                    </div>
                    <div className="flex flex-col gap-5 border-b pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]"> ¿Qué sucede después de que haga mi inscripción? </h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]">  Después de hacer tu inscripción, recibirás el primer correo en las próximas 24 horas con el inicio de tu programa. Si no has recibido tu Guía, verifica tu bandeja de spam. Si aún no está allí, infórmanos poniéndote en contacto con nuestro equipo de atención al cliente. </p>
                    </div>
                    <div className="flex flex-col gap-5 border-b pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]"> ¿Cuánto tiempo para ver resultados? </h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]"> Tenemos testimonios de estudiantes de Mente Activa que lograron resultados significativos ya en la primera semana, pero los resultados pueden variar de una persona a otra.  </p>
                    </div>
                    <div className="flex flex-col gap-5 border-b pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]">  ¿Funcionará para mí?</h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]"> Si sigues cuidadosamente tu plan, puedes estar seguro de que lograrás grandes resultados y superarás la procrastinación, ¡incluso si te consideras un procrastinador nato!  </p>
                    </div>
                    <div className="flex flex-col gap-5 border-b pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]"> ¿Cuál es el tiempo de acceso? </h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]">  A pesar de que la Guía es un plan antiprocrastinación de 12 semanas, tendrás acceso al contenido durante 12 meses. </p>
                    </div>
                    <div className="flex flex-col gap-5 pt-5 pb-5">
                        <h1 className="text-[#3B4238] font-[600] text-[18px]"> ¿Tengo alguna garantía? </h1>
                        <p className="text-[#3B4238] text-[16px] font-[200] max-w-[338px]">  Tienes una garantía incondicional de 7 días. Es decir: puedes asegurar tu lugar, consumir todo el contenido, y dentro del plazo de 7 días, si te arrepientes, simplemente solicita el reembolso y te devolveremos tu dinero. </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    {/* cards payment  */}
    <section ref={targetSectionRef} className="px-[10px] py-[15px] pb-[35px] bg-[#CDD2FF]">
        <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center mb-12 bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Premium</p>
                    <img src="maspopular.svg" alt="" className="w-[77px]" />
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.66 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>$159.99</s> </span>  Plan Completo con Todos los Bonos</p>
                </div> 
                <div className="w-full flex  md:justify-center relative">
                    <a className="w-full flex justify-center" href="https://pay.hotmart.com/T88050307T?off=ocrhieqp&checkoutMode=10">
                        <button className="font-[600] mt-[12px] bg-[#ec7e00] text-white  text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">12,90 Promoción limitada</button>
                    </a>
                    <img src="recomendad.webp" alt="" className="w-[250px] absolute top-[70%] left-0 right-0 bottom-0" />
                </div>
            </div>
            <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center  bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Súper</p>
                    
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.56 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>$99.99</s> </span> Plan con 3 bonos, seguimiento y grupo</p>
                </div> 
                <div className="w-full flex relative md:justify-center">
                    <a
                    href="https://pay.hotmart.com/T88050307T?off=8dnp3ns3&checkoutMode=10"
                    className="font-[600] mt-[12px] bg-[#ec7e00] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">Ahorra $10,90 Ahorra
                    </a>
                </div>    
            </div>
            <div className="p-[15px] m-[6px] my-3 flex flex-col justify-center items-center bg-[#fff] rounded-[16px]">
                <div className="flex justify-between items-center w-[100%]">
                    <p className="sora-semibold">Plan Básico</p>
                    <img src="mejorvalor.svg" alt="" className="w-[77px]" />
                    <div className="items-center">
                        <p className="sora-semibold text-[14px]">$0.43 / <span className="text-[11px]">por dia</span></p>
                    </div>
                </div>  
                <div className="flex justify-start w-[100%]">
                    <p className="text-[11px]"><span className="text-[#3b4238] text-[12px]"><s>59.99</s> </span>  Plan sin Bonos</p>
                </div> 
                <div className="w-full flex relative md:justify-center">
                    <a
                    href="https://pay.hotmart.com/T88050307T?off=8gy5dlo5"
                    className="font-[600] mt-[12px] bg-[#ec7e00] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[5px] ">Ahorra $9.90 Ahorra
                    </a>
                </div>    
            </div>
            
           
            <div className="mb-6">
                <p className="text-[12px] text-center sora-light">Al escoger un método de pago, aceptas los Términos y condiciones y la Política de privacidad</p>
            </div>
            <div className="flex items-center mb-6">
                <img src="garantiaselo.svg" alt="" className="m-[15px]" />
                <div className="flex flex-col gap-1">
                    <p className="sora-semibold text-[14px]">GARANTIZADO: SIN RIESGOS</p>
                    <p className="text-[12px] sora-light">Cancela en cualquier momento para queno te cobremos el precio completo del programa</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img src="visa.svg" alt="" className="" />
            </div>
        </section>
    </main>
    
    </>
             )}
             
             
    </>
)} 
       