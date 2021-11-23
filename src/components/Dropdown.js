import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';


const Dropdown = ({ isOpen, toggle }) => {
    return (

        <div className={isOpen
            ? ' flex justify-center flex-col items-center bg-Orange text-white space-y-5 p-5 cursor-pointer'
            : 'hidden'}
            onClick={toggle}>

            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Hire me</Link>

            <div className='flex space-x-8 text-xl p-2'>
                <a href="https://github.com/N-Musa?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    <AiFillGithub />
                </a>
                <a href="https://twitter.com/iMusaO9" target='_blank' rel='noopener noreferrer'>
                    <BsTwitter />
                </a>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    <AiFillLinkedin />
                </a>
            </div>
        </div>

    )
}

export default Dropdown
