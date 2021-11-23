import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiReact, DiNodejs } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiSvelte, SiFirebase } from 'react-icons/si'
import { FaGitAlt, FaAws } from 'react-icons/fa'
const Home = () => {
    return (
        <div className='container mt-28 flex flex-col justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full '>

        <h1 className='text-4xl font-Quicksand font-bold'>Frontend Developer Based in Hamburg,<br/> With a Passion of working With And <span className='font-bold text-5xl leading-normal font-Poppins'>Building Modern and Responsive Web Technologies.</span> </h1>
        <h2 className='text-3xl font-bold mt-10 font-Quicksand'>Currently Working With These Technologies:</h2>
         <div className='flex flex-wrap text-center items-center text-5xl mt-12 space-x-7 space-y-6 '>

            <AiFillHtml5/>
            <DiCss3/>
            <IoLogoJavascript/>
            <DiNodejs/>
            <AiFillGithub/>
            <FaGitAlt/>
            <SiTailwindcss/>
            <DiReact/>
            <SiSvelte/>
            <FaAws/>
            <SiFirebase/>
         </div>
        
       
        
          </div>
        
     
    )
}

export default Home

/* 
<Link to='/projects' className='flex mt-7 text-lg justify-center items-center bg-Orange p-2 text-white rounded-md'>
        <AiFillEye className='mr-1 text-xl' />Projects.
        </Link> */