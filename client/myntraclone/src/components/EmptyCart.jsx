import React from "react";
import { Link } from "react-router-dom";
import {BsFillCartPlusFill} from "react-icons/bs";

const EmptyCart = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
        <span className="text-6xl"><BsFillCartPlusFill/></span>
      <h1 className="text-4xl font-semibold">Empty cart</h1>
      <Link
        to="/"
        className="bg-purple-600 text-white font-semibold rounded-md py-2 px-4"
      >
        Add something
      </Link>
    </div>
  );
};

export default EmptyCart;
