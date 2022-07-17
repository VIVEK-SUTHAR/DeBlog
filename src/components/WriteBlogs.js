import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import logo from '../Assets/DeBlog-logos_black.png'

function WriteBlogs(props) {
    const ref = useRef(null);
    const {onClickOutside} = props;
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [onClickOutside]);

    if(!props.show) {
        return null
    }
  return (
    <div ref={ref} className='absolute top-10 font-9xl rounded-xl bg-[#ffffff] w-4/5 h-screen'>
        <div className='flex justify-between'>
            <img src={logo} className='w-1/5 -mt-16' alt="" />
            <div className='mt-4 h-fit items-center flex'>
                <button className='bg-green-500 rounded-xl h-fit mr-8 text-white font-semibold px-3 py-2'>Publish</button>
                <img src="	https://miro.medium.com/fit/c/96/96/0*I2F8PIdog1pkSr8i.jpg" className='rounded-full h-14 w-14 mr-4' alt="" />
            </div>
        </div>
        <div className='ml-12'>
            <div className='block mb-4'>
                <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Title</label>
                <input type="text" onChange={event => setTitle(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-12' />
            </div>
            <div className='block mb-4'>
                <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Subtitle</label>
                <input type="text" onChange={event => setSubTitle(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-12' />
            </div>
            <div className='block mb-4'>
                <label htmlFor="" className='block text-4xl text-[#413f3f] font-Two'>Content</label>
                <textarea type="text" onChange={event => setContent(event.target.value)} className='border-black border-2 rounded-md w-4/5 h-48' />
            </div>
        </div>
    </div>
  )
}

export default WriteBlogs