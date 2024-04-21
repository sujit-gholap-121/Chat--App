import MessageCard from "../Message/index"

const ChatContainer=(props)=>{
    const {msgObj,setMsgObj}=props
    console.log(msgObj)
    return(
        <div className="pt-5 px-2">
            {
                msgObj.map(ele=><MessageCard ele={ele} />)
            }
        </div>
    );
}

export default ChatContainer