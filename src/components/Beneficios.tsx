

export default function Beneficios(){
    const Beneficios = [
        {
            id: "1",
            titulo:"🌙 Mejor calidad del sueño",
            descripcion: "La ciencia más reciente ha confirmado que la procrastinación a la hora de dormir interrumpe los patrones de sueño y reduce la calidad del sueño en al menos un 34%.",
            cor: "#Fefff2"
        },
        {
            id: "2",
            titulo:"🧠 Prevención de enfermedades mentales",
            descripcion: "Los científicos han descubierto una fuerte correlación entre el aumento de la procrastinación y el desarrollo de ansiedad y depresión.",
            cor: "#fbf5f7"
        },
        {
            id: "3",
            titulo:"✨ Impulso de emociones positivas",
            descripcion: "Científicos de la Universidad de Harvard encontraron una correlación directa entre el aumento de la productividad y los niveles generales de felicidad.",
            cor: "#f2fff4"
        },
        {
            id: "4",
            titulo:"🎯 Mayor capacidad cognitiva",
            descripcion: "Científicos de Utah, EUA, demostraron que reducir los niveles de procrastinación acelera nuestra capacidad de procesamiento cerebral.",
            cor: "#fff2f2"
        },
    ]
  
    
    function adicionarUmaClasse(id:any){
        const gatilho = document.getElementById(id);
      
        if (gatilho?.classList.contains('appear')) {
            gatilho?.classList.remove('appear');
            gatilho?.classList.add('hidden');
        } else {
            gatilho?.classList.add('appear');
            gatilho?.classList.remove('hidden');
        }
       
            
        }
    
    
    return(
        <>
    <div className="flex flex-col gap-4">
    {Beneficios.map(b => (
        <div 
        style={{backgroundColor: b.cor}}
        key={b.id}
        className="p-[18px] rounded-[8px] ">
            <a className="flex justify-between items-center"  onClick={() => adicionarUmaClasse(b.id)}>
                <h1 className="text-[16px] font-[700]">{b.titulo}</h1>
                <img className="w-[5px]"  src="dropcet.svg" alt="" />
            </a>
            <p id={b.id} className="pt-[24px] max-w-[320px] hidden font-[400] text-[14px]">{b.descripcion}</p>
        </div>
    ))}
    </div>
    </>
    )
}