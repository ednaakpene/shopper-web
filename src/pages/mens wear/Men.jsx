import React from 'react'
import { useState, useEffect } from 'react';
import { apiGetMensclothing } from '../../services/products.sercices';

const Men = () => {
  const [men, setMen] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGetMensclothing();
      setMen(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching wome's clothing", error);
    }
  };



const cardItem = (men) => {
  return (
      <div class="card my-5 py-4" key={men.id} style={{width: "18rem"}}>
<div class="card-body text-center flex flex-col gap-[70px]">
<div>
<img src={men.image} class="card-img-top w-[200px] h-[200px] " alt={men.title}/>

</div>
              <div className='flex flex-col justify-end h-[100px]'>
                  <h5 class="card-title">{men.title}</h5>
                  <p className="lead">${men.price}</p>
                  <button className="bg-purple-800 border border-purple-500 text-white hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded">Add to cart</button>
              </div>
</div>
</div>
          );
}

          return (
          <div>
              <div className="container py-5">
                  <div className="row">
                      <div className="col-12 text-center text-3xl">
                          <h1>Men's Clothing</h1>
                          <hr />
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row justify-content-around">
                      {men.map(cardItem)}
                  </div>
              </div>
          </div>
          )
}

  


export default Men