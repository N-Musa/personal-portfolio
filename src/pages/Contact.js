import React from 'react'
import { FiSend } from 'react-icons/fi'
import  Lizard  from '../assets/end-of-road.gif'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
const Contact = () => {
    return (
        <div class="container mt-16 flex flex-col justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
        <section className="w-full">
            <div className='text-center text-2xl font-bold'>
            <p className="leading-relaxed font-Quicksand">You’re at the end of the road, buddy!<br/>Feel free to to contact me any time, through any method below.</p>
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">

            <div className="mt-12 text-center">
                    <img src={Lizard} alt='end-of-road-gif' />
                    <a href='tel:+17647007028'>(+49) 176 4700 7029</a>
                    <a href="mailto:n.musa@gmx.net" className="underline mt-3 block text-lg">n.musa@gmx.net</a>
                    <div className='flex space-x-8 text-3xl mt-3 p-1 text-Orange justify-center'>
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

                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-xl font-bold">Name</label>
                        <input className="w-full border border-input-border bg-input px-4 py-4" placeholder='Name...' />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl font-bold">Email</label>
                        <input type="email" className="w-full border border-input-border bg-input px-4 py-4" placeholder='Email..' />
                    </div>
                    <div>
                        <label className="block text-xl font-bold">Message</label>
                        <textarea type="email" className="w-full border border-input-border bg-input px-4 py-4 h-40 resize-none" placeholder='Message...'></textarea>
                    </div>
                    <button className='bg-Orange p-2 rounded-md text-white flex items-center justify-center'>Send it!<span className='text-xl m-1'><FiSend/></span></button>
                </div>

              
                
            </div>

        </section>
    </div>

    )
}

export default Contact
