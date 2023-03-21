import React, { useState, useEffect } from 'react'
import axios from "axios"


export const Main = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/ProductManager")
            .then(response => {
                console.log(response.data)
                setProductList(response.data)
            })
            .catch(err=> console.log(err))
    }, [])
    return (
        <div className='form'>
            <h2>All Products:</h2>
            <ol>
                {
                    productList.map((eachProduct, idx)=>
                    <li key={idx}>
                        {eachProduct.title} ${eachProduct.price} - {eachProduct.description}
                    </li>
                    )
                
                }
            </ol>
        </div>
    )
}
