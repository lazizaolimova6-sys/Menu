import "./App.css";


import { useState } from "react";
import "./App.css";
import burger from '../src/images/burger.avif'
import pizza from '../src/images/59ea752dde4979f03c5db5165797f029---png_1000x_103c0_convert.png'
import hotdog from '../src/images/images.jpg'
export default function App() {
  const menuItems = [
    { id: 1, name: "Burger", price: 25000, image: burger },
    { id: 2, name: "Pizza", price: 45000, image: pizza },
    { id: 3, name: "Hot Dog", price: 18000, image: hotdog },
    { id: 4, name: "Fries", price: 15000, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500" },
    { id: 5, name: "Cola", price: 10000, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500" },
  ];
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  

  const removeItem = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="app">


      {/* HERO */}
      <header className="hero">
        <div className="container">
          <h1>🍔 Fast Food Express</h1>
          <p>Tez, mazali va zamonaviy buyurtma tizimi</p>
        </div>

      </header>

      {/* MENU */}
      <div className="container">
        <div className="grid">
          {menuItems.map(item => (
            <div className="card" key={item.id}>
              <div className="img-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h3>{item.name}</h3>
              <p>{item.price} so'm</p>

              <button className="btn">Buyurtma</button>
            </div>
          ))} 
        </div>
      </div>




      {/* CART */}
      <section className="cart">
        <div className="container">
          <h2>🛒 Savat</h2>

          {cart.length === 0 && <p>Savat bo‘sh</p>}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <b>{item.price * item.qty} so'm</b>
              <button onClick={() => removeItem(item.id)}>❌</button>
            </div>
          ))}

          <h3>Jami: {total} so'm</h3>

          {cart.length > 0 && (
            <button
              className="checkout-btn"
              onClick={() => setShowCheckout(true)}
            >
              💳 Buyurtma berish
            </button>
          )}
        </div>

      </section>

      {/* CHECKOUT */}
      <div className="container">
        {showCheckout && (
          <div className="checkout">
            <div className="box">
              <h2>📦 Buyurtma Formasi</h2>

              <input placeholder="Ismingiz" />
              <input placeholder="Telefon raqam" />
              <input placeholder="Manzil" />

              <h3>💳 To‘lov: {total} so'm</h3>

              <button
                onClick={() => {
                  alert("✅ Buyurtma qabul qilindi!");
                  setCart([]);
                  setShowCheckout(false);
                }}
              >
                Tasdiqlash
              </button>

              <button
                className="close"
                onClick={() => setShowCheckout(false)}
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}