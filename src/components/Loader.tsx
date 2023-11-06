import React, { useState, useEffect } from 'react';

export default function Loader({ onComplete }:any) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prev => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(interval);
                onComplete();
                return 100;
            });
        }, 90); // Incrementará 1% a cada 70ms para levar 7000ms até 100%

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div>
            <h1 className="font-medium text-xl text-[#2BB4C7]">Elaborando tu plan</h1>
            <p className="font-medium text-xl text-[#2BB4C7]">{percent}%</p>
        </div>
    );
}
