
const bar = () => {
    return <div className="w-[1px] md:mt-[20px] mt h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
}

export const DataComponent = () => {
    return (
    <div className="ml-[10px] mt-[70px] md:flex flex items-start justify-end">
        <div className="w-[1px] md:mt-[20px]  h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
        <div className="flex flex-col sm:flex sm:flex-col gap-1 sm:gap-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[100px] sm:pt-4  md:mr-[40px]">
            <p className="text-[10px] sm:text-[16px] text-[#565656] font-[700]">1</p>
            <p className="text-[#696969] text-[10px] sm:text-[14px] font-[400] font-RecklessNeue-Thin">Shared Videos</p>
        </div>
        <div className="w-[1px] md:mt-[20px]  h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
        <div className="flex flex-col sm:flex sm:flex-col gap-1 sm:gap-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[100px] sm:pt-4 md:mr-[40px]">
            <p className="text-[10px] sm:text-[16px] text-[#565656] font-[700]">$9510</p>
            <p className="text-[#696969] text-[10px] sm:text-[14px] font-[400] font-RecklessNeue-Thin">Funds Raised</p>
        </div>
        <div className="w-[1px] md:mt-[20px]  h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
        <div className="flex flex-col sm:flex sm:flex-col gap-1 sm:gap-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[100px] sm:pt-4 md:mr-[40px]">
            <p className="text-[10px] sm:text-[16px] text-[#565656] font-[700]">317</p>
            <p className="text-[#696969] text-[10px] sm:text-[14px] font-[400] font-RecklessNeue-Thin">Co-owner community</p>
        </div>
        <div className="w-[1px] md:mt-[20px]  h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
        <div className="flex flex-col sm:flex sm:flex-col gap-1 sm:gap-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[100px] sm:pt-4 sm:mr-[60px] lg:mr-[150px]">
            <p className="text-[10px] sm:text-[16px] text-[#565656] font-[700]">$3804</p>
            <p className="text-[#696969] text-[10px] sm:text-[14px] font-[400] font-RecklessNeue-Thin">Co-owner Earnings</p>
        </div>
    </div>
    );
};
