
export default function Depoimentos(){
    const Depoimentos = [
        {
            id:"1",
            perfil: "/perfilIndefinido.webp",
            nome:"Claudia D.",
            depoimento:"¡Es impresionante! De hecho, muchas veces, intuía lo que se menciona en esta lección de hoy. Sin embargo, no logré pasar del campo del pensamiento al de la acción. Entonces, este proceso ha sido fundamental porque me lleva a reflexiones mucho más sustanciales acerca de mi modus operandi, es decir, cómo funciono frente a las tareas, desde las más simples hasta las más complejas. En el camino correcto para dejar de ser una Procrastinadora y convertirme en una Ejecutora. Gracias al equipo Mente Activa y amigos por estar juntos en este viaje."
        },
        {
            id:"2",
            perfil: "/perfilIndefinido.webp",
            nome:"Felipe M.",
            depoimento:"¡Sin palabras para cuánto evolucioné después de estas enseñanzas! Soy otro individuo. Felicitaciones a los involucrados. Eso es todo..."
        },
        {
            id:"3",
            perfil: "/perfilIndefinido.webp",
            nome:"Thiago M.",
            depoimento:"¡Tengo mucha gratitud por haber encontrado este método! Todas las actividades contribuyeron MUCHO para que pudiera equilibrar varias áreas de mi vida, todavía hay mucho por aprender. Incluso dejé recordatorios para volver a él de vez en cuando y lo recomiendo a quien pueda, porque fueron días muy transformadores."
        },
        {
            id:"4",
            perfil: "/perfilIndefinido.webp",
            nome:"Caroline G.",
            depoimento:"¡Me gustó mucho el programa! ¡Me ayudó mucho! Hubo algunos momentos de recaída, pero pude ser amable conmigo misma, reconocer lo que estaba pasando y volver al camino. ¡Muchas gracias! ¡Mi equipo y yo lo agradecemos!"
        },
        {
            id:"5",
            perfil: "/perfilBruna.webp",
            nome:"Bruna L.",
            depoimento:"🏆🏆🏆 Llegué al final, ¡comprobando que el curso anti-procrastinación realmente funciona! Muchas cosas ocurrieron a lo largo de estos meses, lo que hizo el viaje aún más increíble. Merecemos un regalo 😄🧡 Fue bueno compartir este momento con ustedes."
        },
        {
            id:"6",
            perfil: "/perfilIndefinido.webp",
            nome:"Wellington R.",
            depoimento:"No fue fácil, pero llegué al final. Hubo días en los que me desanimé, pero no me rendí. El contenido fue bueno y espero que ayude a otras personas."
        },
        {
            id:"7",
            perfil: "/perfilSilvana.webp",
            nome:"Silvana G.",
            depoimento:"gratitud...GRATITUD... todo esto es muy bueno... estoy feliz... mejorando... viviendo cada día como un día nuevo..."
        },
        {
            id:"8",
            perfil: "/perfilIndefinido.webp",
            nome:"Ayrck G.",
            depoimento:"Qué maravilla estar aquí. Comencé un poco descreído de mí mismo, pero estoy logrando llevar adelante proyectos que estaban en papel, estoy identificando el origen de las razones de mi procrastinación y estoy mucho más organizado y enfocado. Es maravilloso sentir que estoy en el camino correcto buscando mi mejor versión."
        },
    ]
      
      
    return(
        <>
        <div className="flex gap-2 ">
                <div className="flex gap-[12px] overflow-scroll max-w-[350px] px-[20px] sm:max-w-[630px]">
                
                    {Depoimentos.map(d => (
                        <div key={d.id} className="">
                            <div className="bg-[#fff] relative mb-[100px] sm:max-w-[630px] w-full border-[#f6f6f6]  border rounded-[10px] p-[30px] flex justify-center">
                                <p className="font-[700] text-[15px] text-left w-[280px]">{d.depoimento}</p>
                                <img className="absolute bottom-0 -mb-[15px] right-0 left-10" src="dividermsp.svg" alt="" />
                                <div className="">
                                    <img className="absolute bottom-0 -mb-[80px] right-0 left-8 w-[50px] rounded-full" src={d.perfil} alt="" />
                                    <p className="absolute bottom-0 -mb-[70px] right-0 left-[100px] font-[700] text-[18px] text-[#6001cf]">{d.nome}</p>
                                </div>
                            </div>
                            <div className="">
                                <img src="" alt="" />
                            </div>
                        </div>
                    ))}
                
                </div>
        </div>
        </>
    )
}

