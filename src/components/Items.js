import React from "react";
import { useSelector } from "react-redux";

const Items = () => {
  const amount = useSelector((state) => state.Amount);
  return (
    <div>
      <h1 style={{ fontSize: "3rem", color: "grey" }}>{amount} Rs</h1>
    </div>
  );
};

export default Items;
