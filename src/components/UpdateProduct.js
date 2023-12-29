import React,{useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = ()=>{
     const[name,setName]=React.useState('');
     const[price,setPrice]=React.useState('');
     const[category,setCategory]=React.useState('');
     const[company,setCompany]=React.useState('');
     const params=useParams();
     const navigate=useNavigate();

     useEffect(()=>{
          //console.warn(params)
          //calling the api
          getProductDetails();
     },[])
    
     const getProductDetails = async() =>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
     }

    
     const UpdateProduct = async () => {
        try {
            console.warn(name, price, category, company);
    
            const response = await fetch(`http://localhost:5000/product/${params.id}`, {
                method: 'PUT',  // Use 'PUT' instead of 'Put'
                body: JSON.stringify({ name, price, category, company }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`Failed to update product: ${response.status} - ${response.statusText}`);
            }
    
            const result = await response.json();
            console.warn(result);
    
            // Assuming 'navigate' is a function that redirects to a different page
            navigate('/');
        } catch (error) {
            console.error(error.message);
            // Handle the error as needed, e.g., display an error message to the user
        }
    };
    

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