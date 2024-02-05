import person from '../assets/person.png'
import bg from '../assets/bgtopbar.png';

const mainDivStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    
};
export const Card = () => {
    return(
        <div className="flex w-[330px] h-[150px] sm:w-[571px] sm:h-[234px] absolute z-[999999] rounded-[24px] overflow-hidden border border-black shadow-black">
            <div className='h-full w-[150px] flex-shrink-0 sm:w-[235px]'>
                <img src={person} alt="" />
            </div>
            <div className='flex flex-col h-full py-3 sm:py-5' style={mainDivStyle}>
                <div className='flex items-center px-3 sm:px-7 flex-start'>
                    <p className='text-[12px] font-[700] sm:text-[24px] font-Inter-Variable'>DAN MACE</p>
                    <p className='text-[#696969] text-[9px] sm:text-[14px] pl-7 sm:pl-10 font-[400]'>/Johny_Films/</p>
                </div>
                <div className='flex flex-col px-4 sm:px-7 mt-3 sm:mt-5'>
                    <p className='text-[#696969] font-[700] text-[10px] sm:text-[14px] font-Inter-Variable'>Bio</p>
                    <p className='text-[#696969] font-[400] text-[8px] text-wrap sm:text-[14px] pt-1 font-Inter-Variable'>Simply a film fan creating original content for YouTube. Let’s Collaborate.</p>
                </div>
                <div className='px-3 mt-3 sm:px-7 sm:mt-8'>
                    <div className='h-[22px] sm:h-[29px] w-[150px] sm:w-[256px] border border-black rounded-[4px] bg-[#000000A6]'>
                        <div className='font-[300] w-[80px] sm:w-[129px] h-full border-r border-r-black rounded-[4px] flex justify-center items-center' style={mainDivStyle}>
                            <p className='font-RecklessNeue-Thin text-[12px]'>Creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}