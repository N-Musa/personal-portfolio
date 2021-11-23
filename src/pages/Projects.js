import React from 'react'

const Projects = () => {
    return (
        <div className="container mt-28 flex flex-col justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full h-full">
            <h2 className="text-xl font-bold">My Projects</h2>
            <p className='font-Quicksand p-1'>Some of the stuff I've done so far..</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover"/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover"/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full md:block bg-nav h-36 lg:h-72 object-cover"/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81o4xUuddsL.jpg" className="w-full md:block bg-nav h-36 lg:h-72 object-cover"/>
                
            </div>
        </section>
    </div>

    )
}

export default Projects
