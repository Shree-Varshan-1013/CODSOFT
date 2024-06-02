const Calculator = () => {
    return (
        <div className='min-h-screen w-full m-0 p-0 grid place-content-center'>
            <h1 className='text-center text-2xl pb-5 uppercase first-letter:text-5xl tracking-wide font-mono'>Calculator</h1>
            <div className='container flex top-10'>
                <div className='flex lg:min-w-1/3 min-w-1/2 max-w-screen-lg bg-black flex-col gap-5 mx-auto p-4 text-white rounded-lg cursor-pointer select-none font-mono'>
                    <div className='grid grid-cols-4 gap-4 w-full text-center'>
                        <div className='bg-slate-300 col-span-4 text-right pr-5 p-5 text-black text-3xl rounded-lg '>
                            1290
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-red-500 p-3 rounded-lg'>
                            AC
                        </div>
                        <div className='bg-red-500 p-3 rounded-lg'>
                            CE
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg text-3xl'>
                            %
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg text-3xl'>
                            ÷
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            7
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            8
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            9
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            X
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            4
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            5
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            6
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            -
                        </div>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 text-center text-3xl'>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            1
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            0
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            2
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            .
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            3
                        </div>
                        <div className='bg-slate-500 p-3 rounded-lg'>
                            =
                        </div>
                        <div className='row-span-2 bg-slate-500 p-3 rounded-lg content-center'>
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator