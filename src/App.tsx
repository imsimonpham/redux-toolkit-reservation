import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch();

  //handle reservations
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const handleAddReservations = () => {
    if (reservationNameInput !== "") {
      dispatch(addReservation(reservationNameInput));
    }
    setReservationNameInput("");
  };

  //handle customers
  const customers = useSelector((state: RootState) => state.customers.value);

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddReservations();
                }
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return (
              <CustomerCard
                key={index}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
