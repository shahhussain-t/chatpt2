import React from 'react'
import addition from '../assets/addition.png'
import dot3 from '../assets/dot3.png'
const ChatSession = () => {
  return (
    <div className='w-[305px] mxr'>

        <div >



<div className='flex justify-between ml-4 mt-5'>
   <h1 className='text-white text-[1.7rem] font-bold'>My Chats</h1>
   <div className='flex w-[40px]'>
  <img className='w-[100%] mr-2' src={addition} alt="" srcset="" />
  <img className='w-[100%]' src={dot3} alt="" srcset="" />

   </div>
</div >
        </div>

        <div className=' flex justify-around items-center w-[340px] h-[58px] bg-[#3F424A] ml-4 rounded mt-2'>
          <div className='bg-[#1E1F22]  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-[160px] h-[50px] rounded'>

          </div>

          <div className=' w-[160px] h-[50px]'>

</div>
          <div>

          </div>
        </div>


    </div>
  )
}

export default ChatSession