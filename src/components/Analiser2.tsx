import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const PercentageCounter = ({ targetPercentage }:any) => {
  const [percentage, setPercentage] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const increment = targetPercentage / 100;

    if (inView) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => {
          if (prevPercentage + increment >= targetPercentage) {
            clearInterval(interval);
            return targetPercentage;
          }
          return prevPercentage + increment;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [targetPercentage, inView]);

  return (
    <div ref={ref}>
      {inView ? <div className="text-[48px] font-bold">{percentage.toFixed(1)}%</div> : null}
    </div>
  );
};

export default PercentageCounter;
