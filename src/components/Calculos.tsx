import { useEffect, useState } from 'react';

const Calculos = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const frases = [
        "✅ Calculando tus niveles de procrastinación",
        "✅ Analizando tus patrones de comportamiento",
        "✅ Revisando tus malos hábitos",
        "✅ Creando una lista de soluciones",
        "✅ Finalizando tu plan personal"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex < frases.length - 1) {
                    return prevIndex + 1;
                }
                clearInterval(timer);
                return prevIndex;
            });
        }, 1500);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {frases.map((frase, index) => (
                
                <h1 key={index} className={index <= currentIndex ? '' : 'hidden'}>
                    {frase}
                </h1>
            ))}
        </>
    );
}

export default Calculos;
