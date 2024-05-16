import React, { useState,useEffect } from 'react'
const Final=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("coming from usestate to useeffect");
    }, []);
    return(
        <>
        <h1>Welcome to Usestate in React</h1>
        <h2>{count}</h2>
        <button
            onClick={()=>{
                setCount(count+1);
            }}
        > +
        </button>
        </>

    );
};
export default Final;