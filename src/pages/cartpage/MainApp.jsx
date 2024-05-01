// import React, { useState } from 'react';
// import Jewelry from '../Jewelry/Jewelry';
// import CartPage from './Cartpage';

// const MainApp = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (jewelry) => {
//     setCart([...cart, { ...jewelry, quantity: 1 }]);
//     alert(`${jewelry.title} added to cart!`);
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter(item => item.id !== itemId);
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       <Jewelry addToCart={addToCart} cart={cart} />
//       <CartPage cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default MainApp;
