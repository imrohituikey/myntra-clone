import React from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "../store/itemSlice";

const Fetch = () => {
  const dispatch = useDispatch();

  fetch("http://localhost:8080/items")
    .then((res) => res.json())
    .then(({ items }) => {
      dispatch(itemsActions.addinitialItem(items[0]));
    });
  return <></>;
};

export default Fetch;
