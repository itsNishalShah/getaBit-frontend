import React from 'react';
import wallet from '../assets/download.png';
import bellicon from '../assets/bellicon.png';
import profile from '../assets/profile.png';
import dropdown from '../assets/dropdown.png';
import bg from '../assets/bgtopbar.png';

const mainDivStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    
};

export const NavBar = () => {
    return(
        <div className="flex justify-between items-center h-[110px] border border-black" style={mainDivStyle}>
            {/* <div><img src={bg} alt="" /></div> */}
            <div className="ml-[20px] sm:ml-[70px] font-[700] text-[24px] w-[46px] h-[29px] mb-[10px] font-Inter-Variable">
                aBit
            </div>
            {/* <img src={dropdown} alt="" className='block h-[20px] w-[24px] sm:hidden'/> */}
            <div className='block h-[20px] w-[24px] sm:hidden mb-[8px] mr-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
            <div className="hidden sm:mr-[45px] mb-[5px] sm:flex items-center gap-3">
                <div className="flex items-center justify-center h-[12px] w-[139px] border-[2px] rounded-[60px] px-[18px] py-[18px] border-[#764CC2]">
                    <p className="text-[10px] font-bold text-[#764CC2]">Share new video</p>
                </div>
                <img src={wallet} alt="" className='h-[30px] w-[34px] opacity-35'/>
                <img src={bellicon} alt="" className='h-[36px] w-[42px] opacity-35'/>
                <div className='h-[30px] w-[30px] border border-black rounded-[50px] overflow-hidden'>
                    <img src={profile} alt="" className='h-full w-full object-cover'/>
                </div>
                <img src={dropdown} alt="" className='h-[30px] w-[34px] opacity-40'/>
            </div>
        </div>
    )
}