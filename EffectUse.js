// 1)UseEffect is used to solve issue It is used when API from one component to another component is taken and used in JSX
//2) After loading component...it is used to change data in component like event handling concept
//3) useeffect(callback,[dependencies(optional)]);
//4) With empty array

import { useEffect, useState } from "react";



function TestEffect(){
    let [timer,setTimer]=useState(0)
    useEffect(
        ()=>{
            console.log("Inside UseEffect");
        },[timer]
    )

    // setInterval(()=>{
    //     setTimer(timer+1)
    // },1000);
    return(
        <>
        <h1>Demo of UseEffect
        {console.log("Welcome to Useeffect")};
        </h1>
        <button onClick={()=>{
            setTimer(timer+1)
        }}>updatetimer</button>
        
        </>
    )
}
export default TestEffect;

