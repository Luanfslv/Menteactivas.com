import PercentageCounter from "@/components/Analiser2";
import Beneficios from "@/components/Beneficios";
import ButtonLink from "@/components/ButtonLink";
import Depoimentos from "@/components/Depoimentos";
import Divider from "@/components/Divider";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Q4() {
  const [show, setShow] = useState(false);
  const targetSectionRef = useRef<HTMLElement | null>(null);
  const handleButtonClick = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timer); // Limpe o timer se o componente for desmontado
  }, []); // A lista de dependências vazia significa que este useEffect será executado apenas uma vez, semelhante a componentDidMount.

  return (
    <>
      {show && (
        <>
          <main className="bg-[#fff] fadeIn">
            <nav className="flex justify-between px-[12px] bg-[#ffffff] items-center mb-[12px] fixed top-0 left-0 w-full shadow-md z-50">
              <div className="flex justify-center max-w-[100px] items-center py-2">
                <img
                  className="w-full"
                  src="Logo[menteactiva(coruja)].svg"
                  alt=""
                />
              </div>
              <div className="flex px-[12px]">
                <a
                  onClick={handleButtonClick}
                  className="font-[700] mt-[6px] px-[20px] text-[13px] bg-[#348aa2] text-white text-center rounded-full py-[9px] "
                >
                  Ver Mi Plan
                </a>
              </div>
            </nav>
            <div className="bg-[#e7f9ff] flex flex-col justify-center items-center pt-[60px]">
              <div className="flex justify-center items-center py-2">
                <p className="font-light text-[12px] text-center max-w-[280px]">
                  Deja de postergar tareas, logra más y obtén más confianza hoy
                  mismo
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center justify-center pt-6">
              <div className="flex flex-col text-center items-center justify-center gap-2">
                <p className="font-light text-[12px]">
                  Basado en las respuestas, recomendamos el
                </p>
                <h1 className="sora-semibold text-[26px] max-w-[380px] sm:max-w-[600px]">
                  Un plan para acabar con tu procrastinación en 1 mes.
                </h1>
              </div>
              <Divider />
            </div>
            <div className="mb-[20px]">
              <div className="flex justify-center items-center text-center">
                <h3 className="font-[600] text-[15px]">
                  Tu nivel de procrastinación:{" "}
                  <span className="text-red-600"> 37 (ALTO)</span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-[10px] p-[10px]">
              <div className="border rounded-[6px] md:max-w-[400px] p-[20px]">
                <p className="sora-semibold text-[16px] text-center">
                  Puntaje de procrastinación
                </p>
                <img src="graf1.svg" alt="" className="w-full" />
              </div>
              <div className="border rounded-[6px] md:max-w-[400px] p-[20px] flex justify-center flex-col items-center text-center">
                <h1 className="sora-semibold text-[23px]">
                  Deja de desperdiciar tu tiempo
                </h1>
                <p className="font-light text-[16px] pt-1">
                  Mejora drásticamente tus{" "}
                  <span className="sora-semibold">
                    niveles de productividad en solo diez días
                  </span>
                </p>
                <img src="graf2.svg" alt="" className="w-full pt-[20px]" />
              </div>
            </div>
            <section className="">
              <div className="flex-col justify-center items-center flex border mx-[10px] rounded-[6px] p-[20px]">
                <PercentageCounter targetPercentage={84} />
                <Divider />
                <p className="max-w-[338px text-[15px] text-center font-light">
                  de las personas que tienen resultados similares al tuyo,
                  mejoraron significativamente su capacidad de autocontrol y de
                  realización de grandes proyectos y tareas.
                </p>
              </div>
              <div className="py-6 flex mx-12">
                <a
                  onClick={handleButtonClick}
                  style={{
                    backgroundImage:
                      "linear-gradient(53deg,#ec7e00 0,#ff3434 100%)",
                  }}
                  className="font-[600] mt-[12px] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[10px] "
                >
                  Ver Mi Plan
                </a>
              </div>
            </section>
            <section className="my-12">
              <div className="flex flex-col justify-center">
                <img
                  src="womantrophy.svg"
                  alt=""
                  className="border-b mx-[20px]"
                />
                <div className="flex mt-4 flex-col justify-center gap-2 text-center p-[20px] items-center">
                  <PercentageCounter targetPercentage={82} />
                  <p className="text-[14px] text-center max-w-[310px] font-[250]">
                    de nuestros miembros dejaron de procrastinar por completo en
                    4 semanas
                  </p>
                </div>
                <div className="flex mt-4 flex-col justify-center gap-2 text-center p-[20px] items-center">
                  <PercentageCounter targetPercentage={76} />
                  <p className="text-[14px] text-center max-w-[310px] font-[250]">
                    nuestros miembros empezaron con niveles parecidos de estrés
                    y ansiedad
                  </p>
                </div>
                <div className="flex mt-4 flex-col justify-center gap-2 text-center p-[20px] items-center">
                  <PercentageCounter targetPercentage={45} />
                  <p className="text-[14px] text-center max-w-[310px] font-[250]">
                    de nuestros miembros tienen el mismo desencadenante de la
                    procrastinación
                  </p>
                </div>
              </div>
            </section>
            <Divider />
            <section className="">
              <div className="flex flex-col justify-center p-[20px]">
                <h1 className="text-center text-[24px] font-semibold max-w-[655px]">
                  Usamos la ciencia de la conducta para ayudar a las personas a
                  cambiar a largo plazo
                </h1>
                <div className="flex items-center justify-center gap-2 pt-6 ">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="clocker.svg"
                      alt=""
                      className="w-[60px] m-[15px]"
                    />
                    <p className="text-[14px] font-[250] max-w-[106px] text-center">
                      No más tiempo desperciciado
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="chatter.svg"
                      alt=""
                      className="w-[60px] m-[15px]"
                    />
                    <p className="text-[14px] font-[250] max-w-[106px] text-center">
                      No más estrés y ansiedad
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="mapper.svg"
                      alt=""
                      className="w-[58px] pt-1 m-[15px]"
                    />
                    <p className="text-[14px] font-[250] max-w-[106px] text-center">
                      No más chances perdidas
                    </p>
                  </div>
                </div>
                <a
                  onClick={handleButtonClick}
                  className="text-white bg-gradient-to-r from-[#ec7e00] to-[#ff3434] font-[700] text-center text-[14px] mt-8 rounded-[36px] px-[20px] py-[10px]"
                >
                  Ver Mi Plan
                </a>
              </div>
            </section>
            <section className="py-[40px] bg-[#D8EBEA] px-[10px]">
              <div className="flex flex-col gap-4 justify-center sm:flex-wrap items-center">
                <h1 className="text-center font-semibold text-[32px] max-w-[250px]">
                  Tu resumen personal:
                </h1>
                <p className="font-[320] text-[16px] max-w-[320px] text-[#42593A] text-center">
                  Tus respuestas indican que puedes estar sofriendo de:
                </p>
                <div className="bg-[#fff] flex gap-4 max-w-[370px] rounded-[16px] mx-[8px] flex-col justify-center items-center pt-[26px] pb-[32px] px-[25px]">
                  <img src="mooner.svg" alt="" className="w-[66px]" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[16px] font-semibold text-center">
                      Procrastinación para dormir
                    </h1>
                    <p className="font-[250] text-[14px] text-center">
                      Tus puntajes indican que podrías estar procrastinando para
                      dormir
                    </p>
                  </div>
                </div>
                <div className="bg-[#fff] flex gap-4 max-w-[370px] rounded-[16px] m-[8px] flex-col justify-center items-center pt-[26px] pb-[32px] px-[25px]">
                  <img src="batteryer.svg" alt="" className="w-[66px]" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[16px] font-semibold text-center">
                      Baja tolerancia a la frustración
                    </h1>
                    <p className="font-[250] text-[14px] text-center">
                      Tiendes a sumarle pensamientos negativos a una situación
                      ya de por sí frustrante.
                    </p>
                  </div>
                </div>
                <div className="bg-[#fff] flex gap-4 max-w-[370px] rounded-[16px] m-[8px] flex-col justify-center items-center pt-[26px] pb-[32px] px-[25px]">
                  <img src="dimonder.svg" alt="" className="w-[66px]" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[16px] font-semibold text-center">
                      Perfeccionismo
                    </h1>
                    <p className="font-[250] text-[14px] text-center">
                      Parece que tu actitud es hipersensible y raras veces te
                      satisface cómo queda tu trabajo.
                    </p>
                  </div>
                </div>
                <div className="bg-[#fff] flex gap-4 max-w-[370px] rounded-[16px] m-[8px] flex-col justify-center items-center pt-[26px] pb-[32px] px-[25px]">
                  <img src="hearter.svg" alt="" className="w-[66px]" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[16px] font-semibold text-center">
                      Evitación de la incomodidad
                    </h1>
                    <p className="font-[250] text-[14px] text-center">
                      Parece que te enfocas en la incomodidad que sientes y la
                      aumentas.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex bg-[#fff] items-center justify-center">
              <img src="trans.svg" alt="" className="-mt-[1px]" />
            </section>

            <section
              style={{
                backgroundImage: "linear-gradient(0deg,#fffdec 0,#cdd2ff 100%)",
              }}
              className="flex flex-col justify-center items-center px-[20px]"
            >
              <div className="text-[#252525] flex flex-col justify-center items-center text-center pt-[30px] gap-[16px]">
                <h1 className="font-[250] text-[23px]">
                  Vas a Ganar <span className="font-[700]">Más Tiempo</span>
                </h1>
                <p className="text-[16px]">
                  Vamos transformar la manera en que lidias con la
                  procrastinación a través de este plan intensivo.
                </p>
                <div
                  style={{ boxShadow: "0 0 10px 0 rgba(0,0,0,.24)" }}
                  className="bg-[#fff] rounded-[10px] flex flex-col justify-center items-center"
                >
                  {/* content */}
                  <div className="p-[15px]">
                    <h1 className="text-center sora-semibold text-[19px]">
                      Hagamos una rápida reflexión. ¿estás conviviendo con los
                      sentimientos que se mencionan a continuación?
                    </h1>
                    <div className="pt-[15px]">
                      <ul className="flex flex-col gap-4 justify-center text-left">
                        <li className="items-baseline flex gap-2 text-[15px] font-[250]">
                          <img
                            src="dotcircle.svg"
                            alt=""
                            className="w-[13px]"
                          />
                          <p>
                            <span className="sora-semibold">
                              Constantemente distraído
                            </span>{" "}
                            y siendo impedido de obtener resultados, con una
                            serie de compromisos por cumplir.
                          </p>
                        </li>
                        <li className="items-baseline flex gap-2 text-[15px] font-[250]">
                          <img
                            src="holecircle.svg"
                            alt=""
                            className="w-[13px]"
                          />
                          <p>
                            <span className="sora-semibold">
                              Estresado y arrepentido
                            </span>{" "}
                            porque no está dedicando suficiente tiempo a las
                            cosas importantes (porque son muchas).
                          </p>
                        </li>
                        <li className="items-baseline flex gap-2 text-[15px] font-[250]">
                          <img
                            src="dotcircle.svg"
                            alt=""
                            className="w-[13px]"
                          />
                          <p>
                            <span className="sora-semibold">
                              Como si la vida fuera un torbellino agitado...
                            </span>
                            <br /> no sabes a dónde va todo tu tiempo y nunca
                            hay suficiente para nada.
                          </p>
                        </li>
                        <li className="items-baseline flex gap-2 text-[15px] font-[250]">
                          <img
                            src="holecircle.svg"
                            alt=""
                            className="w-[13px]"
                          />
                          <p>
                            <span className="sora-semibold">
                              Culpable por tomarte un tiempo para descansar
                            </span>
                            , relajarte o incluso cuidarte adecuadamente.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pb-[35px]">
                  <p className="my-6 text-justify">
                    Si estás sintiendo alguno de estos desafíos, no estás solo.
                    Descubrirás cómo poner fin a estos sentimientos y ganar{" "}
                    <span className="font-[700]">
                      más que solo tiempo... sino más vida.
                    </span>
                  </p>
                  <a
                    onClick={handleButtonClick}
                    className="text-white bg-gradient-to-r from-[#ec7e00] to-[#ff3434] font-[700] text-[14px] mt-8 rounded-[36px] px-[60px] py-[10px]"
                  >
                    Ver Mi Plan
                  </a>
                </div>
              </div>
            </section>
            <section className="bg-gradient-to-b from-[#16697a] to-[#f6f6f7] py-[30px]">
              <div className="">
                <h1 className="text-[#fff] pb-[25px] text-center font-[700] text-[23px]">
                  Haz tu inscripción
                </h1>
                <div className="relative">
                  <div className="bg-[#fff] rounded-[16px] py-[25px] px-[15px]  pt-[270px] mx-[20px]">
                    <img
                      src="guiaap.webp"
                      alt=""
                      className="absolute top-0 left-0 sm:left-[15%] w-full max-w-[462px]"
                    />
                    <div className="">
                      <ul className="flex flex-col gap-5">
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            <span className="sora-semibold">
                              + 30 lecciones
                            </span>{" "}
                            prácticas
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            Sistema de{" "}
                            <span className="sora-semibold">
                              herramientas de productividad
                            </span>
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            <span className="sora-semibold">
                              + De 25 materiales didácticos
                            </span>{" "}
                            complementarios en PDF
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            <span className="sora-semibold">
                              Comunidad privada
                            </span>{" "}
                            en una plataforma dedicada con canales exclusivos
                            para miembros
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            Nuevas actualizaciones de{" "}
                            <span className="sora-semibold">
                              contenido, lecciones y desafíos
                            </span>
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            <span className="sora-semibold">
                              Eventos en vivo
                            </span>{" "}
                            programados de preguntas y respuestas
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[250]">
                            + 5 Bonos para{" "}
                            <span className="sora-semibold">
                              potenciar tus resultados
                            </span>
                          </p>
                        </li>
                        <li className="flex gap-4 items-center">
                          <img
                            src="checkgreen.svg"
                            alt=""
                            className="w-[15px]"
                          />
                          <p className="font-[700]">
                            Certificado de Incremento de productividad
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center my-6">
                      <a
                        onClick={handleButtonClick}
                        style={{
                          backgroundImage:
                            "linear-gradient(53deg,#ec7e00 0,#ff3434 100%)",
                        }}
                        className="font-[600] mt-[12px] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[10px] "
                      >
                        Ver Mi Plan
                      </a>
                      <h3 className="pt-8 font-[250] text-[16px] text-gray-600">
                        ¡Inscríbete ahora, mientras aún hay tiempo!
                      </h3>
                    </div>
                  </div>
                  {/* end  */}
                </div>
              </div>
            </section>
            <section className="py-12 px-[20px] bg-gradient-to-b from-[#f6f6f7] to-[#16697a]">
              <div className="bg-[#D8EBEA] flex border-[#90b9b9] border flex-col px-[10px] py-[40px] justify-center items-center rounded-[16px]">
                <h1 className="font-[400] text-[#0E5B5B] text-center">
                  Las técnicas de Mente Activa fueron mencionadas en:
                </h1>
                <div className="flex flex-col justify-center gap-4 p-[10px] mt-[10px]">
                  <img src="Forbes.png" alt="" className="w-[96px]" />
                </div>
                <div className="flex flex-col justify-center gap-4 p-[10px] mt-[10px]">
                  <img src="thenytimes.png" alt="" className="w-[240px]" />
                </div>
                <div className="flex flex-col justify-center gap-4 p-[10px] mt-[10px]">
                  <img src="busines.png" alt="" className="w-[101px]" />
                </div>
              </div>
              <div className="bg-[#D8EBEA] border-[#90b9b9] border my-6 flex flex-col px-[25px] py-[40px] justify-center items-start rounded-[16px]">
                <h1 className="font-semibold text-[#0E5B5B] text-[24px] text-left">
                  Nuestra promesa:
                </h1>
                <div className="flex flex-col gap-4 text-[#3B4238]">
                  <p className="font-[250] pt-2 text-[14px]">
                    Sabemos cómo es eso: sentir que{" "}
                    <span className="sora-semibold">
                      luchamos constantemente contra una procrastinación
                    </span>{" "}
                    incapacitante y siempre buscando cómo derrotarla.
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    Algunas veces, vemos un rayo de esperanza, pero luego{" "}
                    <span className="sora-semibold">
                      caemos rápidamente en los mismos patrones.
                    </span>{" "}
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    Al principio, eso significó no cumplir con una fecha límite
                    o no pagar una factura. Pero luego nos dimos cuenta de que
                    eso era tan solo la punta del iceberg. Las verdaderas
                    consecuencias eran{" "}
                    <span className="sora-semibold">
                      las relaciones acabadas, los sueños sin cumplir y una
                      salud mental deteriorada.
                    </span>{" "}
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    Con el tiempo, aprendimos que los problemas del
                    procrastinador son profundos y toma más que{" "}
                    <span className="sora-semibold">
                      ‘tener disciplina’ o ‘cambiar los malos hábitos’
                    </span>
                    . La raíz del problema está enquistada en la misma esencia
                    de nuestra personalidad.{" "}
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    Juntos, usaremos diversas técnicas para ayudarte a{" "}
                    <span className="sora-semibold">
                      dejar de procrastinar de una vez por todas
                    </span>{" "}
                    , con las últimas{" "}
                    <span className="sora-semibold">
                      herramientas personalizadas y la ciencia de la conducta.
                    </span>{" "}
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    La clave es que ganes autoconocimiento y conozcas qué
                    herramientas y sistemas funcionan específicamente para ti.
                  </p>
                  <p className="font-[250] pt-2 text-[14px]">
                    {" "}
                    Con el transcurso de los años, nuestro sistema personalizado
                    ha ayudado a miles de personas que lidian con este problema
                    endémico, el cual les ocasiona un sinfín de horas de
                    ansiedad y posiblemente depresión.{" "}
                    <span className="sora-semibold">
                      ¡Estamos seguros de que también te ayudará!
                    </span>{" "}
                  </p>
                  <p className="sora-semibold pt-2 text-[14px]">
                    {" "}
                    Equipo de ciencias e investigaciónen <br /> Mente Activa
                  </p>
                </div>
              </div>
              <section
                ref={targetSectionRef}
                className="flex flex-col justify-center items-center my-6"
              >
                <Link
                  href="/vCheckout2"
                  style={{
                    backgroundImage:
                      "linear-gradient(53deg,#ec7e00 0,#ff3434 100%)",
                  }}
                  className="font-[600] mt-[12px] text-white text-center w-full md:max-w-[450px] rounded-[36px] py-[10px] "
                >
                  Ver Mi Plan
                </Link>
              </section>
            </section>

            <section className="flex justify-center text-center items-center text-black font-extralight text-[10px] bg-[#d7ffed] py-[15px] ">
              <h1 className="">
                © COPYRIGHT 2023 – Todos los derechos reservados © Mente Activa
              </h1>
            </section>
          </main>
        </>
      )}
    </>
  );
}
