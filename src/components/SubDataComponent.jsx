import { DataComponent } from "./DataComponents"

const bar = () => {
    return <div className="w-[1px] md:mt-[20px] mt h-[62px] bg-[#7A7A7A] mr-[19px]"></div>
}

export const SubDataComponent = () => {
    return(
        <div className="flex  md:mr-[95px] sm:flex justify-center items-center gap-8 pr-[10px] sm:pr-[65px]">
                    <div className="flex items-center justify-center">
                        {bar()}
                        <DataComponent title={"1"} data={"Shared Videos"} type={1}/>
                    </div>
                    <div className="flex items-center justify-center">
                        {bar()}
                        <DataComponent title={"$9510"} data={"Fund Raised"} type={1}/>
                    </div>
                    <div className="flex items-center justify-center">
                        {bar()}
                        <DataComponent title={"317"} data={"Co-owner community"}/>
                    </div>
                    <div className="flex items-center justify-center">
                        {bar()}
                        <DataComponent title={"$3804"} data={"Co-owner earnings"} />
                    </div>
        </div>
    )
}