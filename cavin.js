import React from 'react';

let obj={
    title:"RAECT",
    fname:"props"
}
const Cavin=()=>{
    return(
        <section className='container'>
            <h1>My nmame is cavin</h1>
            <h2>Full stack  courseName="Web devlopment"</h2>
            {/* <h4>HTML,CSS,JAVASCRIPT,ANGULAR</h4> */}
            <App2 Name="HTML,CSS,JAVASCRIPT,ANGULAR"/>
            <h3>{obj.title}</h3>
            <h3>{obj.fname}</h3>
            
        </section>
    )
}

const App2=(props)=>{
    console.log(props);
    return(
        <section>
            <h3>My nmame is cavin full stackweb</h3>
            <App3 consept="props"/>
            <App3 consept="props"/>
            <App3 consept="props"/>
            <App3 consept="props"/>
        </section>
    )
}

const App3=(props)=>{
    console.log(props)
    return(
        <section>
            <h3>My nmame is cavin  ...........</h3>
        </section>
    )
}
export default Cavin;