import React from 'react'
import img from "../assets/raman.png"
function DataCollab () {
  return (
    <>
    <div>
        <div className='bg-blue-200 mx-8 mb-5 text-3xl flex justify-center font-bold border-2 border-black mt-10'>COLLABORATORS</div>
        <div className='flex flex-wrap justify-around bg-blue-200 mx-8 mb-5 border-2 border-black'>
        <div className='pt-5 pl-10 pb-5 p-auto'>
            <img src={img} alt="RAMAN Lab" className="flex h-auto w-auto max-h-40 max-w-40"></img>
        </div>
        <span className='my-auto text-3xl font-bold justify-center items-center flex-col'>Robotics and Machine Analytics Laboratory (RAMAN Lab) , MNIT JAIPUR</span>
        </div>
    </div>
  </>
  )
}

export default DataCollab;

