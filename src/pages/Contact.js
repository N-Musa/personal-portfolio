import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend } from 'react-icons/fi'
import Lizard from '../assets/end-of-road.gif'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

const Contact = () => {

    const notify = () => toast.success('Thank you! your message was sent')


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="container mt-14 flex flex-col justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
            <section className="w-full">
                <div className='text-center text-2xl font-bold'>
                    <p className="leading-relaxed font-Quicksand">You’re at the end of the road, buddy!<br />Feel free to contact me any time, through any method below.</p>
                </div>
                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
                    <div className=" text-center">
                        <img src={Lizard} alt='end-of-road-gif' />
                        <a href="mailto:m.nuradin@outlook.com" className="underline mt-3 block text-lg">m.nuradin@outlook.com
                        </a>
                        <div className='flex space-x-8 text-3xl mt-4 p-1  justify-center'>
                            <a href="https://github.com/N-Musa?tab=repositories" target='_blank' rel='noopener noreferrer'>
                                <AiFillGithub />
                            </a>
                            <a href="https://twitter.com/iMusaO9" target='_blank' rel='noopener noreferrer'>
                                <BsTwitter />
                            </a>
                            <a href="www.linkedin.com/in/nuradin-musa" target='_blank' rel='noopener noreferrer'>
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>
                    <form onSubmit={sendEmail} ref={form} className="space-y-3">
                        <label className="block mb-2 text-xl font-bold">Name</label>
                        <input className="w-full border border-input-border bg-input px-4 py-4"
                            name='name'
                            placeholder='Name...'
                            required />
                        <label className="block mb-2 text-xl font-bold">Email</label>
                        <input type="email" className="w-full border border-input-border bg-input px-4 py-4"
                            name='email'
                            placeholder='Email..'
                            required />
                        <label className="block text-xl font-bold">Message</label>
                        <textarea type="email" className="w-full border border-input-border bg-input px-4 py-4 h-40 resize-none"
                            name='message'
                            placeholder='Message...'></textarea>
                        <button
                            onClick={notify}
                            type='submit'
                            value='Send'
                            className='bg-Orange p-2 rounded-md text-white flex items-center justify-center'>Send it!
                            <span className='text-xl m-1'><FiSend /></span>
                        </button>
                        <ToastContainer
                            position="top-center"
                            autoClose={4300}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme='colored'
                        />
                    </form>
                </div>
            </section>
        </div>

    )
}

export default Contact
