//Conditional rendering is used for using function and displaying content using conditions using ? Operator
//But it is displayed as let loggedIn=true  then before Ternary operator condition is shown or right side



import './App.css'
let loggedIn=false;
let isAdmin=false;

function App(){
    return (
        <>
        <Bottom></Bottom>
        <Header></Header>
       
        
    
        {
            isAdmin?(<li>Message Displayed</li>):(<li>Message is showing none</li>)
        }
        </>
    )
    
}


function Header(){
    return(
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Phone Number</li>
            
            {
                loggedIn?(<li>Logout</li>):(<li>Login</li>)
            }
        </ul>
    )
}
function Bottom(){
    return(
        <h1>Welcome to topic Conditional Rendoring</h1>
    )
}

export default App;