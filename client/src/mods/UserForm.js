import React,{useEffect,useState} from 'react'
let UserForm=()=>{
    let [obj,setObj]=useState('')

    let submitHandler=async (e)=>{
        await e.preventDefault()
        let userData=await {
            name:e.target[0].value,
            msg:e.target[1].value
        }
        await FormPostHandler(userData)
    }

    let FormPostHandler= async (userData)=>{
         fetch('http://localhost:5258/api/Demo',{
                method:'POST',
                headers:{
                   'Content-Type':'application/json'
                },
                body:JSON.stringify(userData)
            })

    }
    

    return(
        <React.Fragment>
        <form onSubmit={submitHandler}>
            <input type='text'/>
            <input type='textbox'/>
            <input type='submit'/>
        </form>
        <p>{obj}</p>
        </React.Fragment>
    )
}
export default UserForm