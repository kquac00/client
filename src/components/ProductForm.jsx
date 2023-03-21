import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ProductForm = () => {
    const[title, setTitle] = useState("")
    const[price, setPrice] = useState("")
    const[description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newFrontEndData = {title, price, description}
        axios.post("http://localhost:8000/api/ProductManager", newFrontEndData)
        .then(response =>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            <h1 className='form1'>Product Manager</h1>
            <form onSubmit={handleSubmit} className='form1'>
                <div>
                <label>Title</label>
                <input type="text" name='title' value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                <label>Price</label>
                <input type="number" name='price' value={price} onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                <label>Description</label>
                <input type="text" name='description' value={description} onChange={e=>setDescription(e.target.value)} />
                </div>
                <div>
                <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm