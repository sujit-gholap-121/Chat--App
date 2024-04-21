const MessegeCard=(props)=>{
    const{ele}=props
    const {name,msg,timee}=ele
    return(<div>
        <div className="flex items-center">
            <h1 className=" text-xs rounded-full w-[25px] h-[25px] flex items-center justify-center text-white bg-red-500">{msg[0].toUpperCase()}</h1>
            <h1 className="ml-[15px]">{name}</h1>
            <p className="ml-15px">{timee}</p>
        </div>
        <p className="bg-white rounded-r-lg text-black ml-6  px-3 py-1 pr-5 pt-0 w-fit">{msg}</p>
    </div>)
}

export default MessegeCard