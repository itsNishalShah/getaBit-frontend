import { AddCard } from "./AddCard"
import { DataComponent } from "./DataComponents"
import { PreBuildCard } from "./PreBuildCard"

const bar = () => {
    return <div className="w-[1px] h-[70px] sm:h-[100px] bg-[#7A7A7A] mr-[12px]"></div>
}

export const CenterComponent = () => {
    return(
        <div className="flex flex-col w-full bg-white mt-[70px] sm:mt-[140px]">
            {/* // Upper Div */}
            <div className="block lg:flex lg:justify-between lg:items-center">
                <div className="flex mt-[50px] flex-col pl-[20px] sm:pl-[35px] ">
                    <p className="text-[18px] sm:text-[28px] font-[400] font-RecklessNeue-Thin">Releases</p>
                    <p className="pt-[10px] text-[#565656] font-RecklessNeue-ThinItalic text-[12px] sm:text-[16px] text-wrap">Videos that you upload in collaboration with aBit appear here.</p>
                </div>
                <DataComponent />
            </div>
            <div className="flex flex-col gap-3 w-full sm:flex sm:flex-row sm:gap-9 sm:pl-[35px] items-center justify-center md:items-start md:justify-start mt-[50px]">
                <AddCard />
                <PreBuildCard />
            </div>
            <div className="flex flex-col sm:flex sm:flex-row justify-between border border-[#D8D8D8] pb-10 sm:h-[383px] mt-[90px] sm:mt-[250px] w-full pl-[80px]">
                <div>
                    <div className="flex flex-col mt-[50px] sm:mt-[130px] w-[260px]">
                        <p className="text-[20px] sm:text-[42px] font-[700] font-Inter-Variable">aBit</p>
                        <p className="text-[15px] sm:text-[20px] font-[400] text-wrap font-RecklessNeue-Thin">Changing The Way In Which Creators And Fans Interact.</p>
                    </div>
                </div>
                    <div className="flex mt-[40px] sm:mt-[140px] sm:mr-[64px]">
                        {bar()}
                        <div className="flex flex-col gap-4 ml-4 sm:mr-[47px]">
                            <p className="text-[#262626] font-[700] text-[9px] sm:text-[14px] font-Inter-Variable">Home</p>
                            <p className="text-[#262626] font-[700] text-[9px] sm:text-[14px] font-Inter-Variable">Are you a Creator?</p>
                            <p className="text-[#262626] font-[700] text-[9px] sm:text-[14px] font-Inter-Variable">Support</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}