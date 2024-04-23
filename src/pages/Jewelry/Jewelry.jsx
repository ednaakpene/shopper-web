import React from 'react'
import { useState, useEffect } from 'react';
import { apiGetJewelry } from '../../services/products.sercices';

const Jewelry = () => {
  const [jewelries, setJewelry] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGetJewelry();
      setJewelry(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching jewelry", error);
    }
  };



const cardItem = (jewelry) => {
  return (
      <div class="card my-5 py-4" key={jewelry.id} style={{width: "18rem"}}>
              <div class="card-body text-center flex flex-col gap-[70px]">
                <div>
                <img src={jewelry.image} className="card-img-top w-[200px] h-[200px] " alt={jewelry.title}/>

                </div>
                  <div className='flex flex-col justify-end h-[100px]'>
                  <h5 class="card-title">{jewelry.title}</h5>
                  <p className="lead">${jewelry.price}</p>
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
                          <h1>Jewelery</h1>
                          <hr />
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row justify-content-around">
                      {jewelries.map(cardItem)}
                  </div>
              </div>
          </div>
          )
}

  


export default Jewelry