import React from 'react'
import {bagActions} from '../store/bagSlice';
import {GrAddCircle} from 'react-icons/gr';
import { useDispatch } from "react-redux";

const Homeitem = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToBag =() =>{
    dispatch(bagActions.addToBag(item));
  }
  return (
    <div className="text-sm P-4 flex flex-col gap-1">
      <img className="rounded-md max-h-[70%]" src={item.image} alt="item image"/>
      <div className="rating">
          Star ⭐ | Rating
      </div>
      <div className="">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="flex gap-4">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="bg-green-300 w-full h-10 rounded-md hover:scale-105 items-center justify-center gap-4 flex" onClick={handleAddToBag}><GrAddCircle /> Add to Bag</button>
    </div>
  )
}

export default Homeitem