import {useRef} from "react"
function App(){
    let ele=useRef(22)
    
    return(
        <>
        <h1>This is heading 1</h1>
        <button onClick={()=>{console.log(ele)}}>Click</button>
        </>
    )
}
export default App;