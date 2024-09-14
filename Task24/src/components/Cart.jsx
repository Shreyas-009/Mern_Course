import React, { useContext, useEffect, useState } from "react";
import Data from "../assets/Data";
import { ProductContext } from "../context/ProductContext";
import cartLogo from "../assets/Shopping-removebg-preview.png";
import deleteLogoStill from "../assets/delete_Gif._Icon.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState(Data);
  const {
    cartProducts,
    setCartProduct,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    cartProducts.forEach(
      (product) => (price += product.price * product.quantity)
    );
    setTotalPrice(price);
  }, [cartProducts]);

  const handelIncrement = (id) => {
    let updatedProducts = [...cartProducts];
    let index = updatedProducts.findIndex((product) => product.id === id);

    if (index !== -1 && updatedProducts[index].quantity < 10) {
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + 1,
      };
      setCartProduct(updatedProducts);
    }
  };

  const handelDecrement = (id) => {
    let updatedProducts = [...cartProducts];
    let index = updatedProducts.findIndex((product) => product.id === id);

    if (index !== -1 && updatedProducts[index].quantity >= 1) {
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity - 1,
      };
      setCartProduct(updatedProducts);
    }
    if (index !== -1 && updatedProducts[index].quantity <= 0) {
      handelDeleteProduct(id);
    }
  };

  const handelDeleteProduct = (id) => {
    let index = cartProducts.findIndex((product) => product.id === id);

    if (index != -1) {
      let updatedCartList = cartProducts.filter((product) => product.id != id);

      products.filter((product) =>
        product.id == id ? (product.status = false) : ""
      );
      setCartProduct(updatedCartList);
    }
  };

  const handleEmptyCart = () => {
    products.map((product) => {
      product.status = false;
    });
    setProducts(products);
    setCartProduct([]);
  };

  return (
    <>
      <div
        onClick={() => setCart(!cart)}
        className={`${
          cart ? "absolute" : "hidden"
        } md:hidden w-full h-[93%] bg-black/70 z-10 `}
      ></div>

      <div
        className={`${
          cart
            ? "flex translate-x-[0] md:translate-x-[0]"
            : "flex translate-y-[800px] translate-x-0 md:translate-x-[800px] md:translate-y-0"
        } flex flex-col bg-zinc-800 w-full absolute right-0 z-10 md:z-0 md:w-1/2  gap-4 p-2 bottom-0 rounded-b-none rounded-t-3xl md:rounded-xl h-4/6 md:h-[95%] md:right-4 md:top-4 md:shadow-2xl md:shadow-black  transition-all duration-700 ease-in-out`}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-purple-500">
              Cart Products
            </h1>
            <img className="w-12 h-12" src={cartLogo} alt="" />
          </div>
          <button
            className={`${
              cartProducts.length > 0 ? "block" : "hidden"
            } bg-purple-500  rounded-md hover:bg-purple-700 px-3 py-1`}
            onClick={handleEmptyCart}
          >
            Empty Cart
          </button>
        </div>
        <hr />
        <div className="flex flex-col flex-1 gap-3 overflow-y-scroll  scrollBar">
          <div
            className={`${
              cartProducts.length > 0 ? "hidden" : "block"
            } m-auto flex  flex-col items-center`}
          >
            <img className="w-44 h-44" src={cartLogo} alt="" />
            <h1 className={`text-xl font-bold `}>Add Products</h1>
          </div>
          {cartProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="product_card flex gap-3 md:gap-6 p-3 items-center bg-zinc-700 rounded-lg "
              >
                <div className="img h-24 w-24 rounded-xl overflow-hidden">
                  <img src={product.image} alt="" />
                </div>
                <div className="card_info flex flex-col gap-2 bg-zinc-700  rounded-xl flex-1">
                  <h1 className="card_name text-xl line-clamp-1 select-none">
                    {product.name}
                  </h1>
                  <div className="flex gap-7 items-center">
                    <p className="card_price text-2xl  md:text-2xl text-purple-500 select-none flex gap-2">
                      <span>Rs</span>
                      <span>{product.price}</span>
                    </p>
                    <div className="add grid grid-flow-col  w-24  text-center  content-center items-center">
                      <button
                        className=" bg-purple-500 rounded-md hover:bg-purple-700 "
                        onClick={() => handelDecrement(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M5 11V13H19V11H5Z"></path>
                        </svg>
                      </button>
                      <h1 className="select-none">{product.quantity}</h1>
                      <button
                        className=" bg-purple-500 rounded-md hover:bg-purple-700"
                        onClick={() => handelIncrement(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <button
                    className="bg-purple-500 rounded-md hover:bg-purple-700 flex items-center"
                    onClick={() => handelDeleteProduct(product.id)}
                  >
                    <img
                      className="h-12 w-12"
                      src={deleteLogoStill}
                      alt="Delete Animation"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`
              ${
                cartProducts.length > 0 ? "justify-between" : "justify-end"
              } flex j border-t pt-2 items-center`}
        >
          <button onClick={()=>navigate('/checkout')}
            className={`${
              cartProducts.length > 0 ? "block" : "hidden"
            } bg-purple-500  rounded-md hover:bg-purple-700 px-3 py-2`}
          >
            Checkout
          </button>
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-semibold py-1">Total Price : </h1>

            <h1 className="text-2xl font-semibold text-purple-400 ">
              Rs {totalPrice}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
