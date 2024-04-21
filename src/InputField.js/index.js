import { useState } from "react"


const InputField=(props)=>{
    const {msgObj,setMsgObj,names}=props
    const [msg,setMsg]=useState("")
    const manageMsg=(e)=>{
        console.log(e.key)
        if (e.key==="Enter"){
            setMsgObj([...msgObj,{msg,name:names[Math.floor(Math.random()*5)]}])
            setMsg("")
        }
    }
    return(<>
        <input className="bg-transparent absolute bottom-0  px-5 outline:none focus:outline-none border  self-center mx-auto rounded-2xl w-[90%] border-gray-700" value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={manageMsg} />
    </>)
}

export default InputField