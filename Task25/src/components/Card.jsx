import { useDispatch, useSelector } from "react-redux";
import Data from "../assets/Data";
import { addProduct } from "../features/cart/CartSlice";

const Card = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const handleAddProduct = (id) => {
    const product = Data.find((product) => product.id === id);
    if (product) {
      product.quantity = 1;
      const exists = cartProducts.find((prod) => prod.id === product.id);
      if (!exists) {
        dispatch(addProduct({ ...product, status: true }));
      }
    }
  };

  return (
    <>
      {Data.map((product) => {
        const isInCart = cartProducts.some((p) => p.id === product.id);
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
                  isInCart
                    ? "bg-purple-500 cursor-default"
                    : "bg-blue-500 hover:bg-blue-700 "
                } px-3 py-2 text-sm rounded-lg w-fit`}
                onClick={() => handleAddProduct(product.id)}
              >
                {isInCart ? "Product Added" : "Add Product"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;