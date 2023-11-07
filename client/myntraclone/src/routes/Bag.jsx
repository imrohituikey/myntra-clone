import React from "react";
import { useSelector } from "react-redux";
import { Bagitem, EmptyCart } from "../components";

const Bag = () => {
  const bag = useSelector((state) => state.bag);

  const discount = bag.map(
    (product) => product.original_price - product.current_price
  );
  const totalDiscount = discount.reduce((acc, curr) => acc + curr, 0);
  const totalOrigialPrice = bag.reduce(
    (acc, curr) => acc + curr.original_price,
    0
  );
  const totalCurrentPrice = bag.reduce(
    (acc, curr) => acc + curr.current_price,
    0
  );
  const totalShipping = "Free";

  return (
    <div className="xl:px-20 flex flex-basis justify-evenly p-4 flex-shrink transition ease-in-out ">
      <div className="basis-1/2 flex flex-col gap-4 justify-center">
        {bag.length > 0 ? (
          bag.map((item) => <Bagitem key={item.id} item={item} />)
        ) : (
          <EmptyCart />
        )}
      </div>

      <div className="basis-1/4 items-start">
        <div className=" bg-slate-500/30 p-4 flex flex-col gap-12 rounded-md">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Sub total</h1>
                <div>{totalOrigialPrice}</div>
              </div>
              <div className="flex justify-between">
                <h1>Discount</h1>
                <div>{totalDiscount}</div>
              </div>
              <div className="flex justify-between">
                <h1>Shipping</h1>
                <div>{totalShipping}</div>
              </div>
              <div className="flex justify-between">
                <h1>Total</h1>
                <div>{totalCurrentPrice}</div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button className="rounded-full w-full h-10 bg-slate-900 text-white">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
