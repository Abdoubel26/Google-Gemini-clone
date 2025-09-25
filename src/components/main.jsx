import { assets } from "../assets/assets";

function Main() {
    return (
    
    <div className="w-full flex flex-col justify-between ">
        <div className="flex justify-between">
            <p className="text-2xl p-3">Gemini</p>
            <img  className='rounded-full w-12 h-12 m-3 cursor-pointer' src={assets.user_icon} alt="Profile Picture" />
        </div>

        <div className="flex flex-col items-center sm:justify-between sm:h-[65%]">

        <div className="p-2 mb-6">
        <p className="bg-gradient-to-r text-6xl sm:text-7xl from-blue-500 to-red-600 bg-clip-text text-transparent font-semibold">Hello, Dev.</p>
        <p className=" font-semibold sm:text-7xl text-5xl text-gray-300"> How can I help you today?</p>
        </div>

        <div className="sm:flex grid grid-cols-2 mx-4 gap-2">

            <div className="bg-gray-200 p-3 rounded-xl flex flex-col justify-between  text-gray-700 cursor-pointer  h-40 w-50 transition-all hover:bg-gray-300" >
                <p>Suggest Beautiful places to see on an upcoming road trip</p>
                <img className='h-10 w-10 p-1.5  bg-gray-50 rounded-full self-end' src={assets.compass_icon} alt="" />
            </div>

            <div className="bg-gray-200 p-3 rounded-xl flex flex-col justify-between  text-gray-700 cursor-pointer  h-40 w-50  transition-all hover:bg-gray-300" >
                <p>Briefly summurize this concept: urban planning</p>
                <img className='h-10 w-10 p-1.5  bg-gray-50 rounded-full self-end' src={assets.bulb_icon} alt="" />
            </div>

            <div className="bg-gray-200 p-3 rounded-xl flex flex-col justify-between  text-gray-700 cursor-pointer  h-40 w-50  transition-all hover:bg-gray-300" >
                <p>Brainstorm team bonding activitiesf ro our work retreat</p> 
                <img  className='h-10 w-10 p-1.5  bg-gray-50 rounded-full self-end' src={assets.message_icon} alt="" />  
            </div>

            <div className="bg-gray-200 p-3 rounded-xl flex flex-col justify-between  text-gray-700 cursor-pointer  h-40 w-50 transition-all hover:bg-gray-300" >
                <p>Improve the readability of the following code</p>
                <img className='h-10 w-10 p-1.5  bg-gray-50 rounded-full self-end' src={assets.code_icon} alt="" />
            </div>

        </div>

        </div>

        <div className="w-full flex flex-col mb-8  items-center">
            <div className="sm:w-[70%] w-[90%] mt-2 sm:mt-0 bg-blue-50  text-xl rounded-full mx-3 flex">
                <input type="text" className="w-[100%] bg-blue-50 py-4  text-xl p-2 rounded-full pl-4 mx-3 focus:outline-none" placeholder="Enter a prompt here" />
                <img  className='h-6  mr-2 mt-5 cursor-pointer' src={assets.gallery_icon}></img>
                <img className="mr-3  h-6 mt-5 cursor-pointer" src={assets.mic_icon} alt="" />
            </div>
            
        </div>

        <div>
            <p className="text-sm text-center -mt-9 mb-3 mx-1 ">Gemini Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
    </div>


     );
}

export default Main;