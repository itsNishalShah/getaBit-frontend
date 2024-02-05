import cardimg from '../assets/card.png'
import { PreBuildCardData } from './PreBuildCardData';

const cardbg = {
    backgroundImage: `url(${cardimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    
};

export const PreBuildCard = () => {
    return(
        // "bg-[#EDEDED] ml-[60px] h-[290px] w-[240px] sm:h-[312px] sm:w-[283.64px] flex justify-center items-center rounded-[24px] mt-[70px]"
        <div className="bg-[#EDEDED] gap-48  h-[290px] w-[240px] sm:h-[312px] sm:w-[283.64px] flex flex-col rounded-[24px] mt-[70px] shadow-2xl pl-3 pt-4" style={cardbg}>
            <p className='text-[19px] font-[700] text-white font-Inter-Variable'>The Sound of Silence</p>
            <div className='bg-[#9a9393] h-[35px] w-[200px] sm:h-[52.36px] sm:w-[246.76px] opacity-90 rounded-[12px] ml-2 flex justify-between items-center px-4'>
                <PreBuildCardData  title={"Shares"} data={"317"}/>
                <PreBuildCardData  title={"Offered"} data={"75%"}/>
                <PreBuildCardData  title={"Raised"} data={"$9510"}/>
            </div>
        </div>
    )
}