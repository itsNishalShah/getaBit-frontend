
export const PreBuildCardData = ({
    title,
    data
}) => {
    return(
        <div className="flex flex-col items-center">
            <p className="text-[12px] text-white font-[500]">{title}</p>
            <p className="text-[12px] text-white font-[500]">{data}</p>
        </div>
    )
}