import React, { useEffect, useState } from "react";
import cartLogo from "./assets/Shopping-removebg-preview.png";
import deleteLogoStill from "./assets/delete_Gif._Icon.png";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 580.0,
      status: false,
    },
    {
      id: 2,
      name: "Nike React Infinity Run Flyknit",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 450.0,
      status: false,
    },
    {
      id: 3,
      name: "Nike React Miler",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      description:
        "The Nike React Miler offers a durable and supportive design ideal for long runs.",
      price: 890.0,
      status: false,
    },
    {
      id: 4,
      name: "Nike Air Max 270",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 799.0,
      status: false,
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 649.0,
      status: false,
    },
    {
      id: 6,
      name: "Nike Air Max 270",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 999.0,
      status: false,
    },
    {
      id: 7,
      name: "Nike Air Max 270",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
      description:
        "The Nike Air Max 270 features Nike's largest-ever Air unit for a super soft ride that feels as impossible as it looks.",
      price: 800.0,
      status: false,
    },
  ]);

  const [cartProducts, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cartProducts.forEach(
      (product) => (price += product.price * product.quantity)
    );
    setTotalPrice(price);
  }, [cartProducts]);

  const handleAddProduct = (id) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      product.quantity = 1;

      const exists = cartProducts.find((prod) => prod.id === product.id);
      if (!exists) {
        setCartProduct([...cartProducts, product]);
        product.status = true;
      }
    }
  };

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
    <div className="flex bg-zinc-900 text-white min-w-full p-10 gap-5 h-screen">
      <div className="productList grid grid-cols-2 bg-zinc-800 w-1/2 rounded-xl gap-3 p-2 overflow-y-scroll scrollBar">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="product flex flex-col gap-4 p-5 rounded-xl bg-zinc-700 "
            >
              <div className="image w-full flex-1">
                <img
                  className="h-full w-full"
                  src={product.image}
                  alt="product"
                />
              </div>
              <div className="info flex flex-col gap-2">
                <h1 className="name text-xl text-purple-400 font-semibold line-clamp-1">
                  {product.name}
                </h1>
                <p className="description line-clamp-3">
                  {product.description}
                </p>
                <h1 className="price text-xl font-semibold text-purple-400">
                  Rs {product.price}
                </h1>
              </div>
              <button
                className={`${
                  product.status
                    ? "bg-purple-500 cursor-default"
                    : "bg-blue-500 hover:bg-blue-700 "
                } px-4 py-2 rounded-lg w-fit`}
                onClick={() => handleAddProduct(product.id)}
              >
                {product.status ? "Product Added" : "Add Product"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart flex flex-col bg-zinc-800 w-1/2 rounded-xl gap-4 p-4 h">
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
                className="product_card flex gap-6 p-3 items-center bg-zinc-700 rounded-lg "
              >
                <div className="img h-24 w-24 rounded-xl overflow-hidden">
                  <img src={product.image} alt="" />
                </div>
                <div className="card_info flex flex-col gap-2 bg-zinc-700  rounded-xl flex-1">
                  <h1 className="card_name text-xl line-clamp-1 select-none">
                    {product.name}
                  </h1>
                  <div className="flex gap-7 items-center">
                    <p className="card_price text-2xl text-purple-500 select-none">
                      Rs {product.price}
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
                    className="bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1 flex items-center"
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
        <div className="flex justify-between border-t pt-2">
          <h1 className="text-2xl font-semibold">Total Price</h1>
          <h1 className="text-2xl font-semibold text-purple-400 ">
            Rs {totalPrice}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
