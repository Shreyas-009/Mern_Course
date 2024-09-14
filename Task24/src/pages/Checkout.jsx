import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartProducts, totalPrice } = useContext(ProductContext);
  const [paymentOption, setPaymentOption] = useState("credit");
  const navigate = useNavigate();

  useEffect(() => {
    if (cartProducts == 0) {
      navigate("/products");
    }
  }, [cartProducts]);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full p-4 gap-4 overflow-x-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <div className="w-full bg-zinc-800 p-2 rounded-xl grid grid-cols-2 gap-2">
          <button
            className={`${
              paymentOption == "credit" ? "bg-purple-700" : " bg-zinc-700"
            } bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-3 cursor-pointer`}
            type="submit"
            onClick={() => setPaymentOption("credit")}
          >
            Credit Card
          </button>
          <button
            className={`${
              paymentOption == "credit" ? "bg-zinc-700 " : " bg-purple-700"
            } hover:bg-purple-600 text-white rounded-xl py-3 cursor-pointer`}
            type="submit"
            onClick={() => setPaymentOption("cod")}
          >
            Cash On Delavery
          </button>
        </div>
        <div className="left-b flex flex-col gap-3 bg-zinc-800 rounded-xl p-4 ">
          <h1 className="font-bold text-xl text-zinc-100">
            {paymentOption == "credit"
              ? "Credit Card Details"
              : "Enter Your Details"}
          </h1>
          {paymentOption == "credit" ? (
            <form className="flex flex-col gap-3" action="">
              <div>
                <label className="font-semibold text-zinc-300" htmlFor="name">
                  Enter Card Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="border-none bg-zinc-700 outline-none rounded-xl p-2 w-full"
                />
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="font-semibold text-zinc-300" htmlFor="date">
                    Card expiry date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="border-none bg-zinc-700 outline-none rounded-xl p-2 w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-zinc-300 " htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    type="number"
                    name="cvv"
                    placeholder="000"
                    className="border-none bg-zinc-700 rounded-xl p-2 w-full outline-none "
                  />
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 cursor-pointer"
                type="submit"
              >
                Order Now
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-3" action="">
              <div>
                <label className="font-semibold text-zinc-300" htmlFor="name">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="border-none bg-zinc-700 outline-none rounded-xl p-2 w-full"
                />
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label
                    className="font-semibold text-zinc-300"
                    htmlFor="email"
                  >
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="border-none bg-zinc-700 outline-none rounded-xl p-2 w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="font-semibold text-zinc-300 "
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="+91 123-4567-890"
                    className="border-none bg-zinc-700 rounded-xl p-2 w-full outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  className="font-semibold text-zinc-300"
                  htmlFor="address"
                >
                  Enter Your Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="stater, city, lain, homeno"
                  className="border-none bg-zinc-700 outline-none rounded-xl p-2 w-full"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 cursor-pointer"
                type="submit"
              >
                Order Now
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <div className=" bg-zinc-800 rounded-xl h-fit">
          <h1 className="text-center font-bold py-4 text-xl text-zinc-100">
            Added Items
          </h1>
          <div className="service-list h-72 overflow-y-auto">
            <table className="w-full py-4 ">
              <thead className="bg-zinc-600">
                <tr className="py-1 text-zinc-300">
                  <th className="text-start pl-4">S.No</th>
                  <th className="text-start">Product Name</th>
                  <th className="text-start">Price</th>
                  <th className="text-start">Quantity</th>
                </tr>
              </thead>
              <tbody className="table-fixed">
                {cartProducts.map((product, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-zinc-300 border-b border-zinc-600 py-1"
                    >
                      <td className="text-start pl-4">{index + 1}</td>
                      <td className="text-start">{product.name}</td>
                      <td className="text-start">₹ {product.price}</td>
                      <td className="text-start">{product.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex px-4 justify-between py-2 border-t border-zinc-600 text-zinc-300">
            <h1 className="font-bold text-lg">Total Amount</h1>
            <h1 className="font-bold text-lg text-purple-500">₹ {totalPrice}</h1>
          </div>
        </div>
        <div className="w-full bg-zinc-800 p-2 rounded-xl grid">
          <button
          onClick={()=>navigate('/products')}
            className={`bg-purple-500  rounded-xl hover:bg-purple-700 px-3 py-2 `}
          >
            Add Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
