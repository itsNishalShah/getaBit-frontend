import add from '../assets/add.png'

export const AddCard = () => {
    return(
        <div className="bg-[#EDEDED] h-[290px] w-[240px] sm:h-[312px] sm:w-[283.64px] flex justify-center items-center rounded-[24px] mt-[70px]">
            <div className='flex flex-col gap-7 sm:gap-5 mt-[70px] sm:mt-[90px] justify-center items-center px-10'>
                <img src={add} alt="" className='w-[32px] h-[32px] mb-[20px] sm:mb-[60px]'/>
                <div className='flex flex-col'>
                    <p className='text-[#A0A0A0] text-[12px] sm:text-[14px] font-[400] pl-[7px]'>You haven’t uploaded any </p>
                    <p className='text-[#A0A0A0] text-[11px] sm:text-[14px] font-[400] '>videos with aBit yet. Add now!</p>
                </div>
            </div>
        </div>
    )
}   