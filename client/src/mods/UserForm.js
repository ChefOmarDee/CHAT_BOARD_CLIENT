let UserForm=()=>{
    let submitHandler=(e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        let userData={
            name:e.target[0].value,
            msg:e.target[1].value
        }
        // FormPostHandler(userData)
    }
    let FormPostHandler=(userData)=>{
        fetch('http://127.0.0.1:', {
            Method: 'POST',
            Headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            Body: userData
          })
    }

    return(
        <form onSubmit={submitHandler}>
            <input type='text'/>
            <input type='textbox'/>
            <input type='submit'/>
        </form>
    )
}
export default UserForm