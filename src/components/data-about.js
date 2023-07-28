import React from 'react'
import img from "../assets/NIT-Delhi_Logo.png"
function DataAbout () {
  return (
    <>
    <div><br/>
        <div className='bg-blue-200 mx-8 text-3xl flex justify-center font-bold border-2 border-black'>About CSIMR Lab</div>
        <div className='flex flex-wrap justify-around bg-blue-200 mx-8 mb-5 border-2 border-black'>
        <div className='pt-5 pl-10'>
            <img src={img} alt = "CISMR Lab" className="flex h-auto w-auto max-h-40 max-w-40"></img>
        </div>
        <span className='pt-5 text-xl flex pb-10 px-4'>Computational Intelligence and Smart Motion Robotics Lab (CISMR) established in June 2020 focuses on application of Computational Intelligent techniques in various interdisciplinary research areas includes Control & Robotics, application of Machine Learning techniques in various interdisciplinary research areas includes Motion analysis, Bioinformatics and Computer Vision.

    CISMR Lab functions under the guidance of Dr. Chandra Prakash of Department of Computer Science and Engineering at National Institute of Technology (NIT), Delhi, India.

    We are interested in using computer vision and Machine Learning [Deep Learning, Generative Models, Adversarial Learning and Reinforcement Learning ] to solve real world problems . We are associated in the following Areas:</span>
        </div>
    </div>
    <div>
    <div className='bg-blue-200 mx-8 text-3xl flex justify-center font-bold border-2 border-black'>About NIT Delhi</div>
        <div className='flex flex-wrap justify-around bg-blue-200 mx-8 mb-5 border-2 border-black'>
        <div className='pt-5 pl-10'>
            <img src={img} alt = "NIT DELHI" className="flex h-auto w-auto max-h-40 max-w-40"></img>
        </div>
        <span className='pt-5 text-xl flex pb-10 px-4'>National Institute of Technology Delhi (NITD) is one of the thirty one NIT (s) established in the year 2010 by an act of parliament and has been declared as an Institute of National importance.
NIT Delhi is an autonomous Institute which functions under the aegis of Ministry of Education, Government of India. It aims to provide instructions and research facilities in various disciplines of Engineering, Science and Technology, Management, Social Sciences and Humanities for advance learning and dissemination of knowledge.
The mission of NIT Delhi is to produce human resource those who are creative, competitive and innovative with high intellect and ethical values. The Institute is imparting holistic education, along with inculcating high moral values in its students.
NIT Delhi is a renowned institution that prides itself on providing high-quality education and fostering a culture of innovation. With its state-of-the-art facilities and dedicated faculty, NIT Delhi strives to empower its students to become successful professionals in their chosen fields. The institute offers a wide range of undergraduate and postgraduate programs, equipping students with the skills and knowledge necessary to thrive in today’s competitive world. At NIT Delhi, students are encouraged to participate in various co-curricular activities and research projects, allowing them to gain practical experience and broaden their horizons. The institute’s commitment to excellence is reflected in its strong emphasis on research and development, promoting a culture of continuous learning and growth. NIT Delhi is not just an educational institution; it is a place where dreams are nurtured and future leaders are shaped.</span>
        </div>
    </div>
  </>
  )
}

export default DataAbout;

