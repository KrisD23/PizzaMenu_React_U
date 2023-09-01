import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const cssStyle = {};
function Header() {
  return (
    <header className="header">
      <h1 style={cssStyle}>Fast Pizza .Co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            ndulge in a symphony of flavors with our Deluxe Supreme Pizza,
            crowned with a harmonious blend of savory pepperoni, succulent
            sausage, and crisp bell peppers. Elevate your taste experience with
            our signature Truffle Elegance Pizza, adorned with rich truffle oil,
            velvety mushrooms, and creamy mozzarella for an exquisite culinary
            masterpiece.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  if ({ pizzaObj }.pizzaObj.soldOut) {
    return null;
  }
  return (
    <li className="pizza">
      <img src={{ pizzaObj }.pizzaObj.photoName} alt="Pizza spinaci"></img>
      <div>
        <h3>{{ pizzaObj }.pizzaObj.name}</h3>
        <p>{{ pizzaObj }.pizzaObj.ingredients}</p>
        <span>{{ pizzaObj }.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We are happy to wellcome you</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  <div className="order">
    <p>
      We're open until {{ closeHour }.closeHour}:00. Come visit us or Oder
      online.
    </p>
    <button className="btn">Order</button>
  </div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
