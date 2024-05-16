import React,{useState} from 'react'

const AppSignUp=()=>{
    const [data,setdata]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const {username,email,password,confirmPassword}=data;
    const changeHandler = e => {
        setdata({...data,[e.target.name]})
        e.preventDefault();
        console.log(data);
    }
    return(
        <center>
            <form>
                <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
                <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
                <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} />
                <input type="submit" name="submit"/><br/>
            </form>
        </center>
    )
}
export default AppSignUp