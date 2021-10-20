import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardTypes) => {
  const dispatch = useDispatch();
  const [foodItem, setFoodItem] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(addFoodToCustomer({ id, food: foodItem }));
                setFoodItem("");
              }
            }}
          />
          <button
            onClick={() => {
              dispatch(addFoodToCustomer({ id, food: foodItem }));
              setFoodItem("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
