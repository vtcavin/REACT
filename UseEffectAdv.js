import React, { useEffect,useState } from 'react'
const Advanced=()=>{
    const [num,setNum]=useState(0);

    useEffect(()=>{

        console.log("CSK Beat Punjab by 65runs",num)
    },[num]);
    return (
        <>
        <p>Welcome to Post match Presentation</p>
        <h1>{num}</h1>
        <button
            onClick={()=>{
                setNum(num+1);
            }}
        >
            +
        </button>
        </>
    )
}
export default Advanced;