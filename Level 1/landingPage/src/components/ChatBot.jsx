const ChatBot = () => {

    const fixedUserMessages = ['Hi', 'Can you help me?', 'I need guidance in career counseling?'];
    const fixedBotMessages = ['Hello!', 'Of course, I will try my best.', 'Please tell me your concern.'];


    return (
        <div className='flex justify-between m-10'>
            <div className='w-[50%]'>
                <div>
                    <div className='mr-20'>
                        <h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>Shape Your <span id="special-text" style={{ color: "white" }}>Destiny</span>
                            <br />with
                            Comprehensive <br /><span id="special-header-text" className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-8xl' style={{ fontSize: "48px", marginTop: "15px" }}>Career Counseling</span></h1>
                        <p className='text-md leading-7'>
                            DialogDuo is a career guidance tool which leverages Artificial Intelligence powered by LLaMA by Meta. DialogDuo offers AI Chatbot which solves various career guidance queries of the students, by throwing light onto plethora of opportunities available in this fast-developing world.
                            With comprehensive career counseling, individuals receive the knowledge and support necessary to make informed choices and shape a fulfilling and purpose-driven professional life.
                            <br /></p>
                    </div>
                </div>
            </div>
            <div className='w-[50%] mb-10'>
                <div className="mockup-browser border bg-base-300">
                    <div className="mockup-browser-toolbar">
                        <div className="input border border-base-300">https://dialogduo.com</div>
                    </div>
                    <div className="bg-base-200">
                        <div className='box' name="chatbot">
                            <div className='box--right--menu'>
                                <div className="chat-container">
                                    <div className="chat-box">
                                        <div className="chat-message received chat-start">
                                            <div style={{ display: 'flex' }}>
                                                <div><img src="/img/chatbot.png" width={30} id="avatar--bot" /></div>
                                                Hello my name is DialogDuo, How can I help you
                                            </div>
                                        </div>
                                        {fixedUserMessages.map((userMsg, index) => (
                                            <div key={index} className="message">
                                                <div className="chat-message chat-message-user sent">
                                                    <div className='inner-boxes'>
                                                        {userMsg}
                                                        <div><img src="/img/user.png" width={30} id="avatar--user" /></div>
                                                    </div>
                                                </div>
                                                {fixedBotMessages[index] && (
                                                    <div className="chat-message chat-message-bot received">
                                                        <div className='inner-boxes'>
                                                            <div><img src="/img/chatbot.png" width={25} id="avatar--bot" /></div>
                                                            {fixedBotMessages[index]}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot