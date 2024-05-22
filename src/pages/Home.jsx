import { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";
import DiscountProducts from "../components/DiscountProducts/DiscountProducts";
import ProductCard from "../components/ProductCard/ProductCard";

// import CartList from "../components/CartList/CartList";

const Home = ({addItems}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data to check its structure
        setProducts(data.products); // Access the correct key if products is nested
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  // const handleShow = (value)=>{
  //   setShowCart(value)
  // }
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <section className="">
        <div className="container mx-auto">
          <BuyEasyStep></BuyEasyStep>
        </div>
        <div className="container mx-auto">
          <DiscountProducts></DiscountProducts>
        </div>
        <div className="">
          <AboutUs></AboutUs>
        </div>
        <div className="container mx-auto">
        
           
             {/* <CartList cart={cart}></CartList> : */}
            <ProductCard products={products} addItems={addItems}/>
         
        </div>
      </section>
    </div>
  );
};

export default Home;
