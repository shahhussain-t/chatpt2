import React from 'react'
import Leftpanel from '../components/Leftpanel'
import ChatSession from '../components/ChatSession'

const Home = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#494949] p-10'>


<div className='flex bg-[#282A2E]  rounded-tl-[20px] rounded-bl-[20px]' >

<Leftpanel/>
<ChatSession/>

</div>


    </div>
  )
}

export default Home

// background: #1E1F22;
