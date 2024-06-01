import React from 'react'

const Contact = () => {
    return (
        <section className="w-full">
            <div className="relative items-center w-full px-5 pt-2 pb-20 mx-auto md:px-12 lg:px-16 max-w-8xl">
                <div className="flex w-full">
                    <div className="relative flex-col items-center mx-auto">
                        <div className="text-left">
                            <div className="relative mx-auto lg:inline-flex">
                                <div className="items-start text-left">
                                    <div className="mb-10">
                                        <h1 className="max-w-5xl text-2xl font-bold leading-2 tracking-tighter text-neutral-600 lg:text-5xl lg:max-w-7xl">
                                            Stay Connected with Us !
                                        </h1>
                                    </div>
                                    <div>
                                        <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className="p-2 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex">
                                            <div className="flex-1 min-w-0 revue-form-group">
                                                <label className="sr-only">Email address</label>
                                                <input id="cta-email" type="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email " />
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                                                <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="block w-full px-5 py-3 text-base font-medium text-white btn btn-warning">Notify me</button>
                                            </div>
                                        </form>
                                        <div className="sm:max-w-lg sm:flex md:mx-auto">
                                            <p className="mt-3 text-xs text-gray-500">
                                                By subscribing, you agree with Revue’s
                                                <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service </a>
                                                and 
                                                <a target="_blank" href="https://www.getrevue.co/privacy"> Privacy Policy</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact