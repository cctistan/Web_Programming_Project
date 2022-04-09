import React from 'react'
import profileImg from '../images/second-profile-pic.jpg'
import techData from '../data'

function About() {
  return (
    <div>
      <div className='text-3xl sm:text-4xl text-center pb-6 flex flex-col justify-center items-center font-thin'>
        <img className='hover:shadow-lg hover: duration-500 object-cover h-44 w-44 rounded-full' src={profileImg} alt='profile' />
        <span className='text-5xl font-normal py-2'>Cole Tistan</span>
          All in building a better web for everyone.
      </div>
      <div className='text-3xl text-center border-t-2 border-gray-500 pt-6 pb-2'>
        About Me
      </div>
      <div className='container mx-auto px-8 pb-6 text-left text-lg tracking-normal'>
        Hello there! My name is Cole Tistan. Glad you have come across my webpage!
        As long as I can remember, my interest in building web applications began
        when I was attending university where I took a class learning Database Systems.
        In this course, we were tasked with constructing a citation tracker project using
        a MySQL database and integrating the data requested with PHP. This project made me 
        realize I enjoy engineering robust database systems and writing reusable methods in
        a programming language to handle requests made by a user. 
        <br/><br/>
        Moving to the present day, I accepted the opportunity to work for a medium-size 
        software company writing reusable methods and scripts using Python, Django, a Python web framework and the
        features packaged with it; some of which include Django querysets that represent
        instances of database models as a collection of objects.
        <br/><br/>
        In addition, I focus on continously learning and building my skillset by building
        small to large scale projects. In fact, I have recently deployed my first project 
        called the Slow Loris API using MongoDB, ExpressJS, React and NodeJS. 
      </div>
      <div className='text-3xl text-center border-t-2 border-gray-500 pt-6 pb-2'>
        Technologies
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-2xl my-3'>Back End</span>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {
            techData.backendTech.map((data, id) => {
              const Icon = data

              return (
                <Icon className='text-6xl md:text-7xl p-2
                  duration-300 hover:bg-sky-600 hover:border-sky-600 
                hover:text-gray-200 hover:shadow-md border-2 
                border-gray-500 rounded-2xl' 
                  key={id} 
                />
              )
            })
          }
        </div>
          <span className='text-2xl py-3'>Front End</span>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {
            techData.frontendTech.map((data, id) => {
              const Icon = data

              return (
                <Icon className='text-6xl md:text-7xl p-2
                  duration-300 hover:bg-sky-600 hover:border-sky-600 
                hover:text-gray-200 hover:shadow-md border-2 
                border-gray-500 rounded-2xl' 
                  key={id} 
                />  
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About