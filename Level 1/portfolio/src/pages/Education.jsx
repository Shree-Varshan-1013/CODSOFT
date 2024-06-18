import { cn } from '../lib/utils.js'

const Education = () => {
    return (
        <section className="text-white justify-evenly" name="education">
            <div data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className="grid grid-col-1 lg:grid-cols-3 gap-3 place-content-center text-md">
                    <div className="lg:col-span-1 lex lg:justify-self-end justify-self-center lg:block">
                        <p className="text-5xl lg:text-7xl border-l-4 pl-5 border-red-600 mt-10">Education</p>
                    </div>
                    <ul className="relative lg:col-span-2 flex flex-col pl-10 m-10 border-l-4 border-red-600" type="a">
                        <li className="text-white">
                            <h3 className="text-xl font-semibold tracking-wide" style={{ fontSize: '1.6rem', fontWeight: '300', textAlign: 'justify' }}>Kamala Subramanium Matric Higher Secondary School</h3>
                            <p className="text-medium tracking-wide uppercase text-gray-600">SSLC</p>
                            <time className="text-medium tracking-wide uppercase text-gray-600">March 2019</time>
                            <p className="mt-1" style={{ fontSize: '1.2rem' }}>
                                Percentage : 92.4
                            </p>
                            <p className="text-medium tracking-wide uppercase text-gray-600">HSC (MATHS - CS)</p>
                            <time className="text-medium tracking-wide uppercase text-gray-600">MAY 2021</time>
                            <p className="mt-1" style={{ fontSize: '1.2rem' }}>
                                Percentage : 94.27
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold tracking-wide" style={{ marginTop: "15px", fontSize: '1.6rem', fontWeight: '300', textAlign: 'justify' }}>Sri Krishna College of Engineering and Technology (SKCET)</h3>
                            <p className="text-medium tracking-wide uppercase text-gray-600">BE CSE (2021 - 2025)</p>
                            <div style={{ display: "flex", justifyContent: "start" }}>
                                <div
                                    className={cn(
                                        "group relative flex max-w-fit flex-row items-center justify-start rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
                                    )}
                                >
                                    <div
                                        className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] text-xs tracking-wide uppercase"
                                    />
                                    FINAL YEAR
                                </div>
                            </div>
                            <p className="mt-1" style={{ fontSize: '1.2rem' }}>
                                CGPA : 8.83
                            </p>
                        </li>
                    </ul>
                </div>
            </div >
        </section >
    );
}

export default Education;