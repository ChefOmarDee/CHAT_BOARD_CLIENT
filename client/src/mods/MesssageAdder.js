let MessageAdder=(props)=>{

    let deleteHandler=(e)=>{
        console.log(e)
     fetch(('http://localhost:5258/api/Demo/'+e.target.id), { method: 'DELETE' })
     .then(console.log(e.target.id))
     .then(()=>{
        props.test()
    })
    .then(()=>{
        props.getData()
    })
    }

    let MessageList=props.retrievedMessage.map((item,index)=>{
        return  <li key={item.id}>{item.name} <button id={item.id} onClick={deleteHandler}>Delete</button></li>      })
    
    return(
        <ul>{MessageList}</ul>
    )
}
export default MessageAdder