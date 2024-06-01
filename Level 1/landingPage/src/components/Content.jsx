import React from 'react'

const Content = () => {
    return (
        <section>
            <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                    <div className="w-full mx-auto">
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Inspiration</h1>
                        <h2>Recent studies have revealed that as much as 90% of students opt for a wrong career path due to a lack of career guidance and the persisting gap between skills and aptitudes.
                            So, our team decided to leverage Artificial Intelligence to bring forth DialogDuo, which serves as your perfect career guidance companion throughout your career journey.</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                        </svg>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2>Achieve Career Success with Smart, Real-Time Advice!</h2>
                        <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                        </svg>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2>Elevate Your Career with Our Resume Builder and Guidance!</h2>
                        <p>Get Expert Career Advice Now!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content