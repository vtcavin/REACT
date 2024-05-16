import {useState} from "react"
import ProductsCart from './ProductCart'

function API(){
    let [product,updateProducts]=useState([])
    if(product.length==0){
        return(<h1>Fetching Data</h1>)
    }

    return(
        <>
        <h1>Product List</h1>
        <ProductCart/>
        </>
    )
}
export default API