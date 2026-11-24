import React, { useState } from 'react'

const Products = () => {


  const [product, setProduct] = useState("")

  const [saveproduct, setSaveProduct] = useState([])

  const [editproduct, setEditProduct] = useState("")




  const savedata = () => {

      setSaveProduct([...saveproduct, product])

      setProduct("")
    

  }

  const handledelete = (id) =>{


    setSaveProduct(saveproduct.filter((e,i)=> i!==id))

    

  }

const handleupdate = (e, i) => {

  

  setEditProduct(i)
  
  setProduct(e)


}

  return (
    <div className='px-2 py-2'>
      <input onChange={(e) => setProduct(e.target.value)} value={product} className='border p-2 px-1 py-2' type="text" />
      <button onClick={savedata} className='bg-blue-500 text-white py-2 px-4 p-1'>Add Product</button>
  
    {saveproduct.map((e,i)=>(

    <div className='p-2 border px-2 py-2 w-40 flex flex-col mx-3 mt-3' key={i}>
      <h1>{e}</h1>
      <button onClick={()=>handleupdate(e,i)} className='bg-amber-800 text-white p-2 mt-2'>Edit</button>
      <button onClick={()=>handledelete(i)} className='bg-blue-600 text-white p-2 mt-2'>Delete</button>
    </div>

    ))}
    
    </div>

  )
}

export default Products
