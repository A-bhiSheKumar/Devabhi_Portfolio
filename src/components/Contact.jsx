import React from 'react';
import { useState , useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';

import {github} from '../assets';
import {lin} from '../assets';
import {x} from '../assets';

const Contact = () => {

  const formRef = useRef();
  const [form , setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form , [name]: value})
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    setLoading(true);

    //1.we need to pass Service_ID , 2.Template_id , 3.Stuffs of email,  4.Public_key
    emailjs.send('service_wseif7b' , 'template_gdkv6w5',
      {
        from_name: form.name,
        to_name: 'Abhishek kumar',
        from_email: form.email,
        to_email: 'abhikumar8649@gmail.com',
        message: form.message
      }, 'BUgwRrCtSeK2g1XRg')

      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.")

        setForm({
          name:'',
          email:'',
          message:'',
        })
      }, (error) => {
          setLoading(false)

          console.log(error)

          alert('Something went wrong.')
      })


  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left" , "tween" , 0.2 ,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>

        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSumbit}
          className='mt-12 flex flex-col gap-8' 
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your name
            </span>
            <input
              required 
              type="text"
              name="name"
              placeholder= "What's your name?"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              placeholder= "What's your email?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* social */}
        <div className='flex justify-end gap-5'>
          <a href='https://github.com/A-bhiSheKumar'>
          <img 
            src={github}
            alt='github'
            width={30}
            height={30}
            className='object-contain hover:scale-110 transform transition-transform duration-300'
          />
          </a>

          <a href='https://www.linkedin.com/in/abhishek-kumar-39a94b21b/'>
            <img 
            src={lin}
            alt='github'
            width={30}
            height={30}
            className='object-contain hover:scale-110 transform transition-transform duration-300'
            />
          </a>
           
           <a href='https://twitter.com/Stack_Abhi'>
            <img 
            src={x}
            alt='github'
            width={26}
            height={26}
            className='object-contain hover:scale-110 transform transition-transform duration-300'
            />
           </a>
        </div>
      </motion.div>

      {/* For earth */}
      <motion.div
        variants={slideIn("right" , "tween" , 0.2 ,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

     
    </div>
  )

}

export default SectionWrapper(Contact , "contact")