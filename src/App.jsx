import "./App.css";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItems] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addItems = (item) => {
    const newItem = { ...item, quantity: 1 }; // Adding a default quantity of 1
    setCartItems([...cartItems, newItem]);
    setCountItems(countItem + 1);
  }

  return (
    <>
      <div>
        <NavBar toggleModal={toggleModal} count={cartItems.length}></NavBar>
      </div>

      <div className="">
        <Home addItems={addItems}></Home>
      </div>
      <div>
        <Footer></Footer>
      </div>

      <Modal cartItems={cartItems} isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}

export default App;
