import React from 'react'
import { TextScramble } from './ui/text-scramble'

const Loading = () => {
  return (
    <div className='absolute h-screen w-full text-white bg-black flex justify-center items-center'>
        <TextScramble duration={3}>Welcome to  spidey portfolio....</TextScramble>
       
        </div>
  )
}

export default Loading