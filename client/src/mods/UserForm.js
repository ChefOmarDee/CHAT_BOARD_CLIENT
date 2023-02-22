import React,{useEffect,useState} from 'react'
import MessageAdder from './MesssageAdder'
let UserForm=()=>{

    let [uploadCount,setUploadCount]=useState(0)
    let [retrievedMessage,setRetrievedMessage]=useState([])
    let [isLoaded,setIsLoaded]=useState()

    let submitHandler= (e)=>{
        e.preventDefault()
        let userData= {
            name:e.target[0].value,
            msg:e.target[1].value
        }
        FormPostHandler(userData)
        setUploadCount(uploadCount++)
    }

    let FormPostHandler=  (userData)=>{
          fetch('http://localhost:5258/api/Demo',{
                method:'POST',
                headers:{
                   'Content-Type':'application/json'
                },
                body:JSON.stringify(userData)
            }).then(()=>{
                getData()
            })
    }
    
    let getData=()=> 
    {
       fetch("http://localhost:5258/api/Demo")
      .then(res => res.json())
      .then
      (
        (result) => {
        setIsLoaded(true);
          setRetrievedMessage(result)
        },
      )
      
      setUploadCount(uploadCount++)
    }

    // let itemList =retrievedMessage.map((item,index)=>{
    //     // return <li key={index}>{item.name}</li>
    //     return  <li key={index}>{item.name} <button id={index}>Delete</button></li>

    //   })
    let test=()=>{
        console.log("omar")
    }

    useEffect(() => {
          getData()
    },[]);

    return(
        <React.Fragment>
        <form onSubmit={submitHandler}>
            <input type='text'/>
            <input type='textbox'/>
            <input type='submit'/>
        </form>
        <MessageAdder retrievedMessage={retrievedMessage} test={test} getData={getData}/>
        </React.Fragment>
    )
}
export default UserForm