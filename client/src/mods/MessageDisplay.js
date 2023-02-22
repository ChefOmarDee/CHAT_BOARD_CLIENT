import React,{useEffect,useState} from "react"
import MessageAdder from "./MesssageAdder"
let MessageDisplay=()=>{
    let [retrievedMessage,setRetrievedMessage]=useState([])

    
    let getData=()=> 
    {
       fetch("http://localhost:5258/api/Demo")
      .then(res => res.json())
      .then
      (
        (result) => {
          setRetrievedMessage(result)
        },
      )
    }

    useEffect(() => {
          getData()
    },[]);

    return(
        <React.Fragment>
            <MessageAdder retrievedMessage={retrievedMessage}/>
        </React.Fragment>
    )
}
export default MessageDisplay