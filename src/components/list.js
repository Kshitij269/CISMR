const data = ["Call for Summer Research Internship Program on Computational Intelligence and Robotics (CIR-23)",
"Seminar on Advances in Robotics: Latest Platforms for research and application development, Job and Entrepreneurship opportunities in Robotics on 03 July 2023",  
"Patent Published SYSTEM AND METHOD FOR IDENTIFYING AND CLUSTERING HUMAN JOINTS FOR SMART PHYSIOTHERAPY June 2023",
"Narendra got selected in one-week KARYASHALA workshop on “Artificial Intelligence for Biomedical Applications” at IIT(BHU) Varanasi , May 2023",
"Seminar on “Leverage AI to Innovate Faster Using Novelty Checker” 15 Feb 2023",
"JRF Position available in SERB Project Feb 2023",
"Paper Accepted in Expert System  Jan 2023",
"Narendra, Ph.D scholar got the fellowship from IIT Ropar-TIF (AWaDH) Dec 2022",
"Received SERB Grant  Dec 2022",
"The smart gait analyzer, Indian Patent Granted  Dec 2022.",
"ATAL Sponsored FDP Machine Learning Frontiers in Healthcare [ 26 – 30 July2021] Register FDP no: 1614924685:  Machine Learning Frontiers in Healthcare "]

function List(){
    return(
    <div className="bg-blue-200 py-5 px-10 mx-8 mb-5 border-2 border-black">
    <div className="text-3xl font-bold items-start flex py-5 ">News :
    </div>
    <div>
        <ul className='list-disc pl-8'>
                {data.map(item => (
                    <div className='text-lg'><li>{item}</li></div>
                ))}
        </ul>
    </div>
    <div className="mb-10"></div>
    </div>
    )
}

export default List ; 
