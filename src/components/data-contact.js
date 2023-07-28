import React from 'react'
import img from "../assets/map.png"
function ContactData () 
{
  return (
    <>
    <div>
        <div className='bg-blue-200 mx-8 mb-5 text-3xl flex justify-center font-bold border-2 border-black mt-10'>Contact-Us</div>
        <div className='bg-blue-200 mx-8 mb-5 border-2 border-black'>
          <div className='flex text-3xl font-bold pt-5 pl-8 pb-5 p-auto'>
              Postal Address -  
          </div>     
          <span className='font-bold text-2xl flex mx-8'>Office ::</span> <br/>
          <div className='pl-8'>
          डॉ चंद्र प्रकाश | Dr. Chandra Prakash,<br/>
          सहायक प्रोफ़ेसर  | Assistant Professor,<br/>
          संगणक विज्ञान एवं अभियांत्रिकी विभाग | Department of Computer Science and Engineering<br/>
          राष्ट्रीय प्रौद्योगिकी संस्थान दिल्ली | NATIONAL INSTITUTE OF TECHNOLOGY DELHI<br/>
          सेक्टर A-७ , इंस्टीटूशनल एरिया नरेला, दिल्ली -११००४० , भारत | Sector A-7, Institutional Area Narela, Delhi-110040, INDIA<br/>
          <span className='font-bold '>Website</span> www.nitdelhi.ac.in<br/>
          <span className='font-bold'>Tele:</span> +011-33861128 (O),Mobile: +91-7568599806<br/>
          <span className='font-bold'>Email-id:</span> cprakash [at] nitdelhi.ac.in , cse.cprakash [at] gmail.com,<br/>
          <div className=' pb-5'><span className='font-bold'>Contact No: </span>
          <span >+ 91-7568599806</span>
          </div>
          </div>
        </div>
        <div className='bg-blue-200 mx-8 mb-5 border-2 border-black'>
          <div className='flex text-3xl font-bold pt-5 pl-8 pb-5 p-auto'>
              Postal Address -  
          </div>     
          <div className='flex justify-center bg-blue-200 pb-8 mx-8 mb-5 '>
   

              
              <div>
                <img src={img} alt="RAMAN Lab" className="flex h-auto w-auto max-h-80 max-w-80"></img>
              </div>
          </div>

        </div>     
      </div>
  </>
  )
}

export default ContactData;

