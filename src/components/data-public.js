import React from 'react'
const items1 = ["A Vijayvargiy, C Prakash, R Kumar, S Bansal, JMRS Tavares, Human knee abnormality detection from imbalanced sEMG data, Biomedical Signal Processing and Control ,Volume 66, 2021, Elsevier (SCIE, Impact factor 3.137) (pdf)", 
"Kiran Chawla , Chandra Prakash , and Aakash Chawla (2021), Study of Computational Techniques for Smartphone Based Human Activity Recognition, chapter 32, Applications of Artificial Intelligence and Machine Learning, Springer Nature Singapore. doi : 10.1007/978-981-16-3067-5_32",
"Ankur Raj, D. Singh and C. Prakash, Active Human Pose Estimation for Assisted Living”, Thirteenth International Conference on Contemporary Computing (IC3-2021).",
"Ankit, Bharti and C. Prakash, TryItOut: Machine Learning Based Virtual Fashion Assistant, Thirteenth International Conference on Contemporary Computing (IC3-2021).",
"Pranshu Sharma, Bishesh Bikram Shah and C. Prakash, pilot study on Human Pose Estimation for Sports Analysis, 3rd International Conference on Machine Intelligence and Signal Processing (MISP 2021) at NIT Arunachal Pradesh."]

const items2=["Srivastava, V. Rastogi, C. Prakash and R. Singh (2020), Transfer Learning Based COVID-19 Patient Classification, Chapter 34, Volume 1376 of the Communications in Computer and Information Science series, Springer.", 
"S. Srivastava, V. Rastogi, C. Prakash and D. Sethi(2021) Robust Approach for Emotion Classification Using Gait. In: Gupta D., Khanna A., Bhattacharyya S., Hassanien A.E., Anand S., Jaiswal A. (eds) International Conference on Innovative Computing and Communications. Advances in Intelligent Systems and Computing, vol 1165. Springer, Singapore. https://doi.org/10.1007/978-981-15-5113-0_74 (pdf)"]
function DataPublic () {
  return (
    <>
    <div>
        <div className='bg-blue-200 mx-8 text-4xl flex justify-center font-bold border-2 border-black mt-10'>Publications</div>
        <div className='items-start bg-blue-200 mx-8 my-5  border-2 border-black'>
            <div className='flex text-3xl font-bold pt-5 pl-10 pb-5 p-auto'>
                2021 - 
            </div>
            <ul className='list-disc justifly-start items-start'>
                {items1.map(item => (
                    <div className='text-lg px-8'><li>{item}</li></div>
                ))}
            </ul>
        </div>
        <div className='items-start bg-blue-200 mx-8 mb-5 border-2 border-black'>
            <div className='flex text-3xl font-bold pt-5 pl-10 pb-5 p-auto'>
                2020 - 
            </div>
            <ul className='list-disc justifly-start items-start'>
                {items2.map(item => (
                    <div className='text-lg px-8'><li>{item}</li></div>
                ))}
            </ul>
        </div>
    </div>
  </>
  )
}

export default DataPublic;

