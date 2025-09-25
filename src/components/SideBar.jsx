import { assets } from '../assets/assets'
import { useState } from 'react';

function SideBar() {

    const [extended, setExtended] = useState(false)

    return ( 
    <div className={`hidden flex-col sm:flex min-h-full justify-between bg-[#f0f4f9] pr-6 pl-1.5 transition-all outfit  ${!extended ? 'lg:w-20 w-20' : 'lg:w-70 '}`}>

        <div className='h-[75%] '>
        <img  onClick={() => setExtended(prev=>!prev)} className='h-11 cursor-pointer hover:bg-gray-300  mt-2  rounded-full p-2 transition-all' src= {assets.menu_icon} />

        <div className={`${!extended ? '-ml-6 flex justify-center items-center' : null }`}>
           <div onClick={() => setExtended(true)} className={`flex items-center my-5 cursor-pointer bg-gray-300 p-1 rounded-full hover:bg-gray-200 transition-all ${!extended ? 'justify-center pl-2' : null}`}>
                <img className='h-5 mr-1' src={assets.plus_icon} />{ extended ? <p>New Chat</p>  : null}
            </div> 
        </div>
        

        { extended ? <div className='flex flex-col'>
            <p className='mb-2 border-b'>Recent</p>
            <div className='flex items-center  py-1 cursor-pointer hover:bg-gray-200 rounded-xl border border-gray-300 transition-all px-2 '>
                <img className='h-5' src={assets.message_icon}/>
                <p>What is React...</p>
            </div>
        </div> : null }

        </div>

        <div className='flex flex-col'>
        <div className='flex items-center pb-2 cursor-pointer'>
            <img onClick={() => setExtended(true)} className='h-5 mt-1'  src={assets.question_icon} />
            { extended ? <p className=' font-thin pl-1 hover:underline'>Help</p> : null}
        </div>

         <div className='flex items-center pb-2 cursor-pointer'>
            <img onClick={() => setExtended(true)} className='h-5' src={assets.history_icon}/>
            { extended ? <p className=' font-thin pl-1 hover:underline'>History</p> : null}
        </div>

         <div className='flex items-center pb-2 cursor-pointer'>
            <img onClick={() => setExtended(true)} className='h-5' src={assets.setting_icon}/>
            { extended ? <p className=' font-thin pl-1 hover:underline'>Settings</p> : null}
        </div>

        </div>

    </div>
     );
}

export default SideBar;