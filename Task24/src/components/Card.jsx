import { useContext } from "react";
import Data from "../assets/Data";
import { ProductContext } from "../context/ProductContext";
import NoImage from "../assets/image.png";

const Card = () => {
  const { cartProducts, setCartProduct } = useContext(ProductContext);

  const handleAddProduct = (id) => {
    const product = Data.find((product) => product.id === id);

    if (product) {
      product.quantity = 1;

      const exists = cartProducts.find((prod) => prod.id === product.id);
      if (!exists) {
        setCartProduct([...cartProducts, product]);
        product.status = true;
      }
    }
  };

  return (
    <>
      {Data.map((product) => {
        return (
          <div
            key={product.id}
            className="product flex flex-col gap-3 p-3 rounded-xl bg-zinc-700 "
          >
            <div className="image w-full ">
              <img
                className="h-full w-full"
                src={product.image}
                alt="product"
              />
            </div>
            <div className="info flex flex-col flex-1">
              <h1 className="name text-lg text-white font-semibold line-clamp-1">
                {product.name}
              </h1>
              <p className="text-sm description text-zinc-300 line-clamp-3">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="price text-xl font-semibold text-purple-400">
                Rs {product.price}
              </h1>
              <button
                className={`${
                  product.status
                    ? "bg-purple-500 cursor-default"
                    : "bg-blue-500 hover:bg-blue-700 "
                } px-3 py-2 text-sm rounded-lg w-fit`}
                onClick={() => handleAddProduct(product.id)}
              >
                {product.status ? "Product Added" : "Add Product"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
