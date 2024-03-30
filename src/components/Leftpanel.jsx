import React from 'react'

import image from '../assets/logo/image.png'
import arrow from '../assets/arrow.png'
import chatlogo from '../assets/chatlogo.png'
import loc from '../assets/loc.png'
import control from '../assets/control.png'
import stop from '../assets/stop.png'
import profile from '../assets/profile.png'
import logoout from '../assets/logoout.png'
import darrkmode from '../assets/darrkmode.png'



const Leftpanel = () => {
  return (
    <div className='w-[5rem] h-[95vh] bg-[#1E1F22] rounded-tl-[20px] rounded-bl-[20px] flex justify-between items-center flex-col'>

        <div className='mt-5'>

            <div className='w-[45px]'>
                <img className='w-[100%]' src={image} alt="" srcset="" />
            </div>

            <div className='w-[45px] mt-[64px]'>
                <img className='w-[100%]' src={chatlogo} alt="" srcset="" />
                <img className='w-[100%] ' src={control} alt="" srcset="" />
                <img className='w-[100%] mt-4' src={loc} alt="" srcset="" />
                <img className='w-[100%] mt-4' src={stop} alt="" srcset="" />
            </div>

        </div>


         <div className='mt-5'>

            
            <div className='w-[45px] mt-[64px] mb-[25px]'>

        
                <img className='w-[100%] mb-5' src={profile} alt="" srcset="" />
                <img className='w-[100%] ' src={logoout} alt="" srcset="" />
                <div className='w-[35px] h-[2px] bg-[#2D2E30] mt-5 m-auto'></div>
                <img className='w-[100%] mt-4' src={darrkmode} alt="" srcset="" />
              
            </div>

        </div>





    </div>
  )
}

export default Leftpanel