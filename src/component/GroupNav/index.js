import { BiGroup } from "react-icons/bi";

const GroupNav=()=>{
    return(
    <><div className="flex py-4  px-[10px] mx-auto w-[95%] border-b border-gray-500 items-center justify-between">
            <div className="flex-col justify-start">
                <h1 className="text-xl text-dark font-semibold ">Introductions</h1>
                <p className=" text-xs text-gray-500">This Channel is For Company Wide Chatter</p>
            </div>
            <div className="flex items-center">
                <p className="mr-[10px]">3/100</p>
                <div className="text-gray-500">
                    <BiGroup />
                </div>

            </div>

        </div>
        </>
    )
}

export default GroupNav