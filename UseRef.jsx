import {useRef} from 'react'
function Ref(){
    let ele=useRef(10)
    let ele1=useRef(20)

    return(
        <>
        <h1 ref={ele}>This is the concept of Useref</h1>
        <button onClick={()=>{
            console.log(ele)

            console.dir(ele.current)

            ele.current.innerHTML="Changed to React Js"
            
            
            
            }}>Click on Me</button>

        <button onClick={()=>{console.log(ele1)}}>Click</button>
        </>
    )
}
export default Ref;