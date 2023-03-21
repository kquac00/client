import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProductShowOne = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ProductManager/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    },[id])



return (
    <div>
       I am here
    </div>
)
}

export default ProductShowOne