import { assets } from '../assets/assets'

function SideBar() {
    return ( 
    <div className=' flex flex-col border min-h-full justify-between bg-[#f0f4f9]'>

        <div>
        <img className='h-7' src= {assets.menu_icon} />

        <div className='flex items-center'>
         <img className='h-7 bg-gray-300 rounded-full' src={assets.plus_icon} alt="" /> New Chat
        </div>

        <div>
            <p>Recent</p>
            <div className='flex items-center'>
                <img className='h-7' src={assets.message_icon} alt="" />
                <p>What is react ...</p>
            </div>
        </div>

        </div>

        <div>
        <div className='flex items-center'>
            <img className='h-7' src={assets.question_icon} alt="" />
            <p>Help</p>
        </div>

         <div className='flex items-center'>
            <img className='h-7' src={assets.history_icon} alt="" />
            <p>History</p>
        </div>

         <div className='flex items-center'>
            <img className='h-7' src={assets.setting_icon} alt="" />
            <p>Settings</p>
        </div>

        </div>

    </div>
     );
}

export default SideBar;