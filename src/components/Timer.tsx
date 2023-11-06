import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes }:any) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let totalSeconds = minutes * 60 + seconds;

    if (totalSeconds > 0) {
      const timer = setInterval(() => {
        if (totalSeconds > 0) {
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          setMinutes(newMinutes);
          setSeconds(newSeconds);
        } else {
          clearInterval(timer); // Para o temporizador quando o tempo atinge 0
        }

         totalSeconds -= 1;
      }, 1000); // Atualiza a cada segundo (1000 milissegundos)

      return () => {
        clearInterval(timer); // Limpa o temporizador ao desmontar o componente
      };
    }
  }, [minutes, seconds]);

  return (
    <div>
      <h1>
        {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};

export default Timer;
