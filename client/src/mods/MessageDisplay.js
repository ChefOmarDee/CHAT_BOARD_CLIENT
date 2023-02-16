import React,{useEffect,useState} from "react"

let MessageDisplay=()=>{
    let [retrievedMessage,setRetrievedMessage]=useState('')

    let getData= async()=> {
        const actualData = await fetch('http://localhost:5258/api/Demo')
        let jsonActualData=await actualData.json()
        await setRetrievedMessage(jsonActualData)
      }


    useEffect(() => {
          getData()
    },[]);

return(
    <React.Fragment>
        <p>hello</p>
        {(retrievedMessage) ? <p>{(retrievedMessage[0]).name}</p> :<p>NOway</p>}
    </React.Fragment>
)
}
export default MessageDisplay