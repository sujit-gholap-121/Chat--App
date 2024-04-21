import { useState } from "react"
import InputField from "../../InputField.js"
import ChatContainer from "../ChatContainer/index.js"
import GroupNav from "../GroupNav"

const names=["Alan", "Bob", "Carol", "Dean", "Elin"]

const ChatApp=()=>{
    const [msgObj,setMsgObj]=useState([])
    console.log(msgObj)
    return(
        <div className="bg-gray-200 flex-col min-h-[100vh]">
            <div>
                <GroupNav/>
                <ChatContainer msgObj={msgObj} setMsgObj={setMsgObj} />
                <InputField names={names} msgObj={msgObj} setMsgObj={setMsgObj} />
            </div>
        </div>
    )
}

export default ChatApp