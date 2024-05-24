import { cn } from '../lib/utils.js'

const Education = () => {
    return (
        <section className="text-white relative mb-20" name="education">
            <div data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className="flex justify-center">
                    <div className="flex">
                        <p className="pe-6 text-7xl">Education</p>
                        <div
                            className="inline-block h-[200px] min-h-[1em] w-0.5 self-stretch bg-red-600">
                        </div>
                    </div>
                    <div className="relative flex flex-col pl-10">
                        <div className="before:absolute before:-left-[14px] before:top-0 before:w-[25px] before:h-[25px] before:rounded-full before:bg-red-600">
                            <h3 className="text-xl font-semibold tracking-wide" style={{ fontSize: '1.6rem', fontWeight: '300', textAlign: 'justify' }}>Kamala Subramanium Matric Higher Secondary</h3>
                            <p className="text-medium tracking-wide uppercase text-gray-600">SSLC</p>
                            <time className="text-medium tracking-wide uppercase text-gray-600">March 2019</time>
                            <p className="mt-1">
                                Percentage : 92.4
                            </p>
                            <p className="text-medium tracking-wide uppercase text-gray-600">HSC (MATHS - CS)</p>
                            <time className="text-medium tracking-wide uppercase text-gray-600">MAY 2021</time>
                            <p className="mt-1">
                                Percentage : 94.27
                            </p>
                        </div>
                        <div className='relative'>
                            <div className="before:absolute before:-left-[53px] before:top-[12px] before:w-[25px] before:h-[25px] before:rounded-full before:bg-red-600">
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
                                <p className="mt-1">
                                    CGPA : 8.83
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Education;