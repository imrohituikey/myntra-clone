import React, { useState } from "react";
import { AiFillDelete, AiFillPlusSquare,AiFillMinusSquare } from "react-icons/ai";
import {useDispatch} from 'react-redux';
import {bagActions} from '../store/bagSlice';

const Bagitem = ({ item }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    const incQty= ()=> {
        const temp = qty+1;
        setQty(temp)
    }
    const decQty = ()=> {
        if(qty<=1){
            setQty(1)
        }else{
            const temp = qty-1;
            setQty(temp)
        }
    }

    const handleRemove =() =>{
        dispatch(bagActions.removeFromBag(item));
    }
  return (
    <div className="text-sm flex gap-4 h-fit bg-pink-300/10 backdrop-blur-md rounded-md p-2 font-sans justify-between items-center">
      <div className="flex gap-6">
        <img
          className="rounded-md h-[144px] w-[100px]"
          src={item.image}
          alt="item image"
        />

        <div className="flex flex-col items-start justify-between">
          <div className="font-semibold">{item.item_name}</div>

          <div className="rating">Star ⭐ | Rating</div>
          <div className="">{item.company}</div>
          <div className="flex gap-4">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between px-6 gap-5">
        <div className="flex flex-col items-center">
          <div className="flex justify-between gap-6 items-center">
            <button onClick={incQty}>
                <AiFillPlusSquare className="text-2xl hover:scale-105"/>
            </button>
            <div>{qty}</div>
            <button onClick={decQty}>
                <AiFillMinusSquare className="text-2xl hover:scale-105"/>
            </button>
          </div>
        </div>
        <button
          className="bg-red-300 w-full h-6 rounded-md hover:scale-105 items-center justify-center gap-4 p-4 flex"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      </div>
    </div>
  );
};

export default Bagitem;
