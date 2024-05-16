function App1(){

    let car="Grand I10"

    let cars=["bmw","suzuki","benz","ferrrai"];

    let bikes=["sp125","bullet","ktm"]

    let foodItems=[{id:1,item:"Biryani"},{id:2,item:"Dosa"}];

    const places=["Hyd","Mbnr","Chennai"]
    return(
        <>
        <h1>{cars}</h1>
        <h2>{car}</h2>

        {
            bikes.map(
                (l,index)=><li key={index}>{l}</li>
            )
        }

        {
            foodItems.map(
                (p,id)=><li key={p.id}>{p.foodItems}</li>
            )
        }

        {
            places.map(
                (p)=><button>{p}</button>
            )
        }
        </>
    )
}
export default App1;