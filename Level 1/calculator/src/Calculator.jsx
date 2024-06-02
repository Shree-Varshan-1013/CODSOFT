import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [calculation, setCalculation] = useState('0');
    const [operator, setOperator] = useState(null);
    const [operand1, setOperand1] = useState(null);
    const [waitingForOperand2, setWaitingForOperand2] = useState(false);

    const handleNumberClick = (number) => {
        if (waitingForOperand2) {
            setDisplay(number.toString());
            setWaitingForOperand2(false);
        } else {
            setDisplay(display === '0' ? number.toString() : display + number.toString());
        }
        setCalculation(prev => prev + number.toString());
    };

    const handleOperatorClick = (op) => {
        if (operator && waitingForOperand2) {
            setOperator(op);
            setCalculation(prev => prev.slice(0, -1) + op);
        } else if (operator && operand1 != null) {
            const result = performCalculation();
            setDisplay(result.toString());
            setOperand1(result);
            setCalculation(result + op);
        } else {
            setOperand1(parseFloat(display));
            setCalculation(prev => prev + op);
        }
        setOperator(op);
        setWaitingForOperand2(true);
    };

    const performCalculation = () => {
        const operand2 = parseFloat(display);
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case 'X':
                return operand1 * operand2;
            case '÷':
                return operand1 / operand2;
            case '%':
                return operand1 % operand2;
            default:
                return operand2;
        }
    };

    const handleEqualsClick = () => {
        if (operator && operand1 != null) {
            const result = performCalculation();
            setDisplay(result.toString());
            setOperand1(null);
            setOperator(null);
            setWaitingForOperand2(false);
            setCalculation(result.toString());
        }
    };

    const handleClearClick = () => {
        setDisplay('0');
        setCalculation('');
        setOperator(null);
        setOperand1(null);
        setWaitingForOperand2(false);
    };

    const handleClearEntryClick = () => {
        setDisplay('0');
        setCalculation(prev => prev.slice(0, -1));
    };

    const handleDecimalClick = () => {
        if (!display.includes('.')) {
            setDisplay(display + '.');
            setCalculation(prev => prev + '.');
        }
    };

    return (
        <div className='min-h-screen w-full m-0 p-0 grid place-content-center'>
            <div className='container flex top-10'>
                <div className='flex lg:min-w-1/3 min-w-1/2 max-w-screen-lg bg-black flex-col gap-5 mx-auto p-4 text-white rounded-lg cursor-pointer select-none font-mono'>
                    <div className='grid grid-cols-4 gap-4 w-full text-center'>
                        <div className='bg-slate-300 col-span-4 text-right pr-5 p-5 text-black text-3xl rounded-lg h-16'>
                            {calculation}
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
                        <div className='bg-slate-500 p-3 rounded-lg text-3xl' onClick={() => handleOperatorClick('÷')}>
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
                        <div className='bg-slate-500 p-3 rounded-lg' onClick={() => handleOperatorClick('X')}>
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
