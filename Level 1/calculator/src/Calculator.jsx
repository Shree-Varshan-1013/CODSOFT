import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [calculation, setCalculation] = useState('');

    const handleNumberClick = (number) => {
        setDisplay(display === '0' ? number.toString() : display + number.toString());
        setCalculation(calculation + number.toString());
    };

    const handleOperatorClick = (op) => {
        if (['+', '-', '*', '/'].includes(calculation.slice(-1))) {
            setCalculation(calculation.slice(0, -1) + op);
        } else {
            setCalculation(calculation + op);
        }
        setDisplay('0');
    };

    const handleEqualsClick = () => {
        try {
            const result = eval(calculation);
            setDisplay(result.toString());
            setCalculation(result.toString());
        } catch {
            setDisplay('Error');
            setCalculation('');
        }
    };

    const handleClearClick = () => {
        setDisplay('0');
        setCalculation('');
    };

    const handleClearEntryClick = () => {
        setDisplay('0');
        setCalculation(calculation.slice(0, -1));
    };

    const handleDecimalClick = () => {
        if (!display.includes('.')) {
            setDisplay(display + '.');
            setCalculation(calculation + '.');
        }
    };

    return (
        <div className='min-h-screen w-full m-0 p-0 grid place-content-center'>
            <div className='container flex top-10'>
                <div className='flex lg:min-w-1/3 min-w-1/2 max-w-screen-lg bg-black flex-col gap-5 mx-auto p-4 text-white rounded-lg cursor-pointer select-none font-mono'>
                    <div className='grid grid-cols-4 gap-4 w-full text-center'>
                        <div className='bg-slate-300 col-span-4 text-right pr-5 p-5 text-black text-3xl rounded-lg'>
                            {calculation || '0'}
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-red-500 p-3 rounded-lg' onClick={handleClearClick}>
                            AC
                        </div>
                        <div className='bg-red-500 p-3 rounded-lg' onClick={handleClearEntryClick}>
                            CE
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg text-3xl' onClick={() => handleOperatorClick('%')}>
                            %
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg text-3xl' onClick={() => handleOperatorClick('/')}>
                            ÷
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(7)}>
                            7
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(8)}>
                            8
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(9)}>
                            9
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleOperatorClick('*')}>
                            X
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(4)}>
                            4
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(5)}>
                            5
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(6)}>
                            6
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleOperatorClick('-')}>
                            -
                        </div>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(1)}>
                            1
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(0)}>
                            0
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(2)}>
                            2
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={handleDecimalClick}>
                            .
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleNumberClick(3)}>
                            3
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={handleEqualsClick}>
                            =
                        </div>
                        <div className='row-span-2 bg-slate-500 p-3 rounded-lg flex items-center justify-center' onClick={() => handleOperatorClick('+')}>
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
