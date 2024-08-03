import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen">
    <div className="w-full h-[80vh] grid grid-cols-2 content-center">
      <div>
        <img
          className="w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 items-start p-20">
        <h1 className="text-center text-5xl">Home</h1>
        <p className="text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab
          sint, in neque fugiat aperiam rem. Odit placeat, quam pariatur nemo
          nam praesentium? Unde temporibus iure, laboriosam cum voluptas,
          aperiam dicta repellat quaerat quod ullam ut officiis dolorem illo
          debitis id doloribus placeat nobis. Beatae rem repellendus, eligendi
          blanditiis fugiat rerum ipsa maiores! Veniam deleniti, earum eligendi
          fuga odio praesentium voluptatum eos soluta nisi amet perspiciatis
          impedit, a consequatur eum quo dolor at mollitia! Aperiam deleniti
          enim ipsam, vitae molestiae dolorum a facilis fuga. Reiciendis
          incidunt nesciunt mollitia reprehenderit, quidem eligendi architecto
          quia adipisci deserunt, illum unde similique quam repudiandae?
        </p>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;
