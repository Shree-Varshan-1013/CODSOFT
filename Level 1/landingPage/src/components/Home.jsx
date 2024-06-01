import React from 'react'

const Home = () => {
    return (
        <section>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div className=" w-full max-w-lg">
                                <div className="absolute  rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div>
                                    <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="/img/hero.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> DialogDuo </span>
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Career Guidance Bot</h1>
                        <p className="mb-4 text-base leading-relaxed text-justify text-gray-500">Which leverages Artificial Intelligence powered by LLaMA by Meta. DialogDuo offers AI Chatbot which solves various career guidance queries of the students, by throwing light onto plethora of opportunities available in this fast-developing world.</p>
                        <div className="flex flex-wrap w-full mt-2 -mx-4">
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="48" viewBox="0 0 256 549"><path fill="#01ec64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677m-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223" /></svg>
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" viewBox="0 0 512 149"><path fill="#222" d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332zm140.455-82.307l-29.49 38.821l-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82l32.323 41.82h4.165l-34.322-44.319l31.323-41.32zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744c5.887 4.72 13.384 7.081 22.492 7.081c5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329c1.61-5.442 2.416-11.163 2.416-17.16c0-6.443-.834-12.386-2.5-17.828c-1.666-5.443-4.082-10.164-7.247-14.162c-3.166-3.999-6.998-7.11-11.497-9.33c-4.498-2.222-9.58-3.333-15.245-3.333c-4.332 0-8.358.639-12.079 1.916c-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 0 0-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746c-6.331-7.164-9.497-17.467-9.497-30.907c0-5.554.778-10.83 2.333-15.828c1.555-4.998 3.804-9.386 6.747-13.162c2.944-3.777 6.582-6.776 10.913-8.997c4.332-2.222 9.22-3.333 14.662-3.333c5.554 0 10.414 1.111 14.579 3.333c4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745c0 4.999-.638 9.97-1.916 14.912c-1.277 4.943-3.249 9.386-5.915 13.33c-2.665 3.942-6.08 7.163-10.246 9.663c-4.166 2.499-9.192 3.748-15.079 3.748m54.816 1.333V70.477c0-4.665.666-9.22 2-13.662c1.332-4.443 3.387-8.359 6.164-11.746c2.777-3.388 6.303-6.054 10.58-7.998c4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666c-3.833 1.222-7.137 2.888-9.914 4.999c-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994c-1.388-5.443-3.61-10.275-6.664-14.495c-3.055-4.221-6.998-7.609-11.83-10.164c-4.832-2.555-10.58-3.832-17.244-3.832c-4.777 0-9.442 1-13.996 3c-4.554 1.999-8.553 4.914-11.996 8.746c-3.443 3.832-6.22 8.525-8.33 14.08c-2.11 5.553-3.166 11.884-3.166 18.993c0 6.331.722 12.246 2.166 17.744c1.444 5.498 3.665 10.275 6.664 14.329c3 4.054 6.86 7.192 11.58 9.413c4.72 2.222 10.413 3.277 17.078 3.166c9.774 0 17.994-2.75 24.658-8.247c6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243c-5.943 4.721-13.412 7.081-22.41 7.081c-6.109 0-11.274-1.055-15.495-3.165c-4.22-2.11-7.664-4.999-10.33-8.664c-2.665-3.666-4.637-7.97-5.914-12.913c-1.278-4.942-1.972-10.302-2.083-16.078m68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161c1.889-4.777 4.36-8.859 7.415-12.246c3.054-3.388 6.609-5.97 10.663-7.748c4.054-1.777 8.414-2.666 13.079-2.666c5.554 0 10.44 1.028 14.662 3.083c4.22 2.055 7.747 4.86 10.58 8.414c2.832 3.554 4.97 7.692 6.414 12.412c1.444 4.721 2.166 9.692 2.166 14.912m72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827c-5.555-4.332-13.108-6.498-22.66-6.498c-5.332 0-9.83.667-13.496 2c-3.665 1.332-6.664 3.054-8.997 5.164c-2.332 2.11-3.998 4.443-4.998 6.998c-1 2.555-1.5 4.999-1.5 7.331c0 4.665.833 8.386 2.5 11.163c1.666 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.331 3c3.11.888 6.72 1.832 10.83 2.831c3.665.89 7.275 1.778 10.83 2.666c3.554.889 6.692 2.083 9.413 3.582c2.722 1.5 4.943 3.416 6.665 5.749c1.721 2.332 2.582 5.387 2.582 9.163c0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 0 1-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498c-3.277.722-6.47 1.083-9.58 1.083c-10.108 0-17.856-2.249-23.243-6.747c-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66c5.832 4.998 14.468 7.497 25.909 7.497c3.665 0 7.358-.417 11.08-1.25c3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.75-6.665 2.75-10.997c0-4.11-.806-7.442-2.416-9.997c-1.611-2.554-3.721-4.665-6.332-6.331c-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 0 0-9.914-2.75a1726.675 1726.675 0 0 0-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166c-2.888-1.222-5.193-2.971-6.915-5.248c-1.722-2.277-2.582-5.526-2.582-9.747c0-.777.222-2.166.666-4.165c.444-2 1.5-4.027 3.166-6.082c1.666-2.054 4.22-3.887 7.664-5.498c3.443-1.61 8.164-2.416 14.162-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.304 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997m77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827c-5.554-4.332-13.107-6.498-22.66-6.498c-5.331 0-9.83.667-13.495 2c-3.666 1.332-6.665 3.054-8.997 5.164c-2.333 2.11-3.999 4.443-4.999 6.998c-1 2.555-1.499 4.999-1.499 7.331c0 4.665.833 8.386 2.5 11.163c1.665 2.777 4.276 4.943 7.83 6.498c2.444 1.11 5.22 2.11 8.33 3c3.11.888 6.72 1.832 10.83 2.831c3.666.89 7.276 1.778 10.83 2.666c3.555.889 6.692 2.083 9.414 3.582c2.721 1.5 4.943 3.416 6.664 5.749c1.722 2.332 2.583 5.387 2.583 9.163c0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 0 1-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498c-3.276.722-6.47 1.083-9.58 1.083c-10.108 0-17.855-2.249-23.242-6.747c-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66c5.831 4.998 14.467 7.497 25.908 7.497c3.666 0 7.359-.417 11.08-1.25c3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.749-6.665 2.749-10.997c0-4.11-.805-7.442-2.416-9.997c-1.61-2.554-3.72-4.665-6.331-6.331c-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 0 0-9.914-2.75a1726.65 1726.65 0 0 0-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166c-2.888-1.222-5.193-2.971-6.914-5.248c-1.722-2.277-2.583-5.526-2.583-9.747c0-.777.222-2.166.667-4.165c.444-2 1.5-4.027 3.165-6.082c1.666-2.054 4.221-3.887 7.664-5.498c3.444-1.61 8.164-2.416 14.163-2.416c4.11 0 7.858.445 11.246 1.333c3.388.889 6.303 2.305 8.747 4.249c2.444 1.944 4.332 4.415 5.665 7.414c1.333 3 2 6.665 2 10.997" /></svg>
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 228"><path fill="#00d8ff" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887m110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565m-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" /></svg>
                            </div>
                            <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42.09" height="48" viewBox="0 0 256 292"><defs><linearGradient id="logosNodejsIconAlt0" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873f" /><stop offset="32.88%" stop-color="#418b3d" /><stop offset="63.52%" stop-color="#419637" /><stop offset="93.19%" stop-color="#3fa92d" /><stop offset="100%" stop-color="#3fae2a" /></linearGradient><linearGradient id="logosNodejsIconAlt1" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873f" /><stop offset="40.32%" stop-color="#54a044" /><stop offset="71.36%" stop-color="#66b848" /><stop offset="90.81%" stop-color="#6cc04a" /></linearGradient><linearGradient id="logosNodejsIconAlt2" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6cc04a" /><stop offset="28.64%" stop-color="#66b848" /><stop offset="59.68%" stop-color="#54a044" /><stop offset="86.24%" stop-color="#41873f" /></linearGradient><path id="logosNodejsIconAlt3" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z" /></defs><path fill="url(#logosNodejsIconAlt0)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z" /><mask id="logosNodejsIconAlt4" fill="#fff"><use href="#logosNodejsIconAlt3" /></mask><path fill="url(#logosNodejsIconAlt1)" d="M249.485 67.8L134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714" mask="url(#logosNodejsIconAlt4)" /><mask id="logosNodejsIconAlt5" fill="#fff"><use href="#logosNodejsIconAlt3" /></mask><path fill="url(#logosNodejsIconAlt2)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63z" mask="url(#logosNodejsIconAlt5)" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home