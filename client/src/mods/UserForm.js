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
        // await getData()
        // await console.log(obj)
    }

    let FormPostHandler= async (userData)=>{
        await fetch('http://localhost:5258/api/Demo',{
                method:'POST',
                headers:{
                   'Content-Type':'application/json'
                },
                body:JSON.stringify(userData)
            })

    }
    let getData= async()=> {
        const actualData = await fetch('http://localhost:5258/api/Demo/4')
        let jsonActualData=await actualData.json()
        await setObj(jsonActualData)
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