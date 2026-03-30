import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Products = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  return (
    <>
      <div>
          <h3>Product ID: {id}</h3>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Purchase</button>
      </div>
      <div>
          <p>Back to home: <Link to = "/">Home</Link></p>
      </div>
    </>
    
  )
}

export default Products
