import React from 'react'

const UpdateProduct = ()=>{
     const[name,setName]=React.useState('');
     const[price,setPrice]=React.useState('');
     const[category,setCategory]=React.useState('');
     const[company,setCompany]=React.useState('');
    
     const UpdateProduct=async()=>{
        console.warn(name,price,category,company)
       
     }

    return(
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product name" className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            
            <input type="text" placeholder="Enter Product price" className='inputBox' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           
            <input type="text" placeholder="Enter Product category" className='inputBox' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            
            <input type="text" placeholder="Enter Product company" className='inputBox' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
          
            <button onClick={UpdateProduct} className='appButton'>Update Product</button>
        </div>
    )
}

export default UpdateProduct;