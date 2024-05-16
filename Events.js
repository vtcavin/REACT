// import React from "react";
// const eventhand=()=>{
//     console.log("Welcome to React Tutorials")
// }
// const App4=()=>{
//     return(
//      <button className="container" onClick={function(e){
//         return eventhand("cavin");
//      }}>Sign In</button>
//     )
// }
// export default App4;


import React from "react";
const Abcd=()=>{
    console.log("Hello World")
}
const Abc=()=>{
    return(
        <>
        <h1>Welcome to Event Handling</h1>
        <button className="modules" onClick={function(e){
            return Abcd("cavin");
            
        }}>Click Here</button>
        </>
    )
}
export default Abc ;