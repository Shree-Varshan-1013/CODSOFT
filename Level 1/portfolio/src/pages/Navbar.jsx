import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
const Navbar = () => {

    const navigate = useNavigate();

    return (
        <header className="select-none text-gray-600 body-font sticky top-0 z-[1100] w-full font-anuphan dark:bg-slate-500 ">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center absolute backdrop-blur bg-opacity-90 dark:bg-opacity-20">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span onClick={() => navigate('/')} className="cursor-pointer ml-3 text-xl color-caramel dark:text-white"> <img src="/img/port-logo.png" alt="logo" width={130} /></span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link to="services" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">About</Link>
                    <Link to="about" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Project</Link>
                    <Link to="contact" smooth duration={1500} className="mr-5 cursor-pointer text-gray-900 font-semibold dark:font-medium dark:text-white">Contact</Link>
                </nav>
            </div >
        </header >
    )
}

export default Navbar