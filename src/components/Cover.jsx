import cover from '../assets/cover.png'
import band from '../assets/band.png'
import '../App.css'
import { Card } from './Card';

const mainDivStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    
};

const bandStyle = {
    backgroundImage: `url(${band})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};
export const CoverComponent = () => {
    return(
        <div className="flex flex-col w-full">
            <div className='w-full h-[318px]' style={mainDivStyle}>
                <div className='ml-[10px] m-[280px] sm:ml-[25px] sm:mt-[225px]'><Card /></div>
            </div>
            <div className='flex justify-center items-center w-full h-[50px] sm:h-[85px] z-10' style={bandStyle}>
                <p className='text-[24px] font-GloriaHallelujah-Regular text-[#FFFFFF] leading-[48px] font-[400] whitespace-nowrap overflow-hidden opacity-85'>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
            </div>
        </div>
    )
}