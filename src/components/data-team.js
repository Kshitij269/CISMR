import React from 'react'
import img from "../assets/raman.png"
function DataTeam () {
  return (
    <>
    <div>
        <div className='bg-blue-200 mx-8 mb-5 text-5xl flex justify-center font-bold border-2 border-black mt-10'>Team</div>
        <div className='bg-blue-200 mx-8 mb-5 border-2 border-black'>
            <div className='my-auto text-3xl font-bold pt-5 pl-8 pb-5 p-auto'>
                Faculty
            </div>
            <div className='flex flex-col border-4 border-black flex-wrap justify-center items-center'>
                <div className='pt-5 pl-10 pb-5 p-auto'>
                    <img src={img} alt="RAMAN Lab" className=" h-auto w-auto max-h-40 max-w-40"></img>
                </div>
                <div className='my-auto text-3xl font-bold '>Dr.Chandra Prakash</div>
            </div>  
        </div>
    </div>
  </>
  )
}

export default DataTeam;

