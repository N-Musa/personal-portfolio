import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ( { toggle }) => {
    return(

        <nav className='container py-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 shadow-sm font-Poppins'>
            <Link to='/' className='text-2xl font-bold'>Nuradin.Musa</Link>
            <div className="hidden md:flex space-x-10 items-center">
            <Link to="/">Home</Link>
            <Link to="/projects" className='px-6 py-2 rounded-md font-bold bg-Orange text-white'>Projects
           
            </Link>
            <Link to="/contact">Hire me
            <span className="animate-ping absolute inline-flex rounded-full h-3 w-3 bg-Orange"></span>
            </Link>
            </div>
            <div onClick={toggle}
                className="md:hidden cursor-pointer">
                <GiHamburgerMenu className='text-3xl' />
            </div>
        </nav>
    )
}

export default Navbar
