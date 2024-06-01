import React from 'react'

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 sticky z-10000 top-0">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">DialogDuo</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Resume</a></li>
                        <li><a>Chatbot</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header