import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const ProductsPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    // Retrieve existing cart items from localStorage
    const storedCartItems = localStorage.getItem("cartItems");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    // Add the clicked product to the cart
    cartItems.push(product);

    // Update the cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  const productPage = (product) => {
    // Navigate to the product details page or cart page
    navigate(`/productdetails/${product.id}`);
  };
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    alert(`${product.title} added to cart!`);
  };

  const Productcard = (product) => {
    return (
      <div className="card my-5 py-4" key={product.id} style={{width: "18rem"}}>
        <div className="card-body text-center flex flex-col gap-[70px]">
          <div>
          <img src={product.image} className="card-img-top w-[200px] h-[200px]" alt={product.title} />
          </div>
          <div className="lex flex-col justify-end h-[100px]">
            <h5 className="card-title">{product.title}</h5>
            <p className="lead">${product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center text-3xl">
            <h1>All Products</h1>
            <hr/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {products.map((product) => (
            <Productcard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
  
export default ProductsPage;