import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import {go} from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

import { fadeIn , textVariant  } from '../utils/motion';


const ProjectCard = ({index , name , description , links , tags , image , source_code_link , live_demo_link}) => {
  return (
    <motion.div 
      variants={fadeIn ("up" , "spring",  index * 0.5 , 0.85)}
      
    >
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" 
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
            {/* Logos og github */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={github}
                  alt='github logo'
                  className='w-1/2 h-1/2 object-contain hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform'
                />
            </div>
            {/* GO LIVE */}
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={go}
                  alt='go live'
                  className='w-1/2 h-1/2 object-contain hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform'
                />
            </div>
          </div>
        </div>

        {/* This div is for description of our projects */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name} </h3>
          <p className='mt-2 text-secondary text-[14px]'>{description} </p>
        </div>

        <div className='flex flex-wrap mt-4 gap-2'>
          {tags.map ((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    //The purpose of the empty React fragment (<></>) or any other parent 
    //element is to provide a single container for the JSX elements you want to render. 
    //It helps maintain the structure of the React component tree and ensures that you're returning a single root element.
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'> 
        <motion.p
          variants={fadeIn("" , "" , 0.1 , 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' 
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* wraper for my project card */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project , index) => (
          <ProjectCard  
            key={`${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works , "project")