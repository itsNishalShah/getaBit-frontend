
export const DataComponent = ({
    title, 
    data
}) => {
    return (
    <div className="flex flex-col gap-1 sm:gap-4 w-[60px] h-[60px] sm:w-[90px] sm:h-[100px] sm:pt-4">
        <p className="text-[10px] sm:text-[16px] text-[#565656] font-[700]">{title}</p>
        <p className="text-[#696969] text-[10px] sm:text-[14px] font-[400] font-RecklessNeue-Thin">{data}</p>
    </div>
    );
};
