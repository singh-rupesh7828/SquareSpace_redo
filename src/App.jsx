import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const App = () => {

  useGSAP(()=>{
      gsap.from("h1", {
        y:30,
        opacity: 0, 
        duration: 1,
         
      });
  })

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <h1 className='text-5xl '>MAKE ME ANIMATED</h1>
    </div>
  )
}

export default App
