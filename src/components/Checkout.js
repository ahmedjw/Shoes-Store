import React, { useState } from "react";
import { postData } from "../api/ShipingServices";

// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
};
const STATUS = {
  Idle: "idle",
  isSubmiting: "isSubmiting",
  submitied: "submited",
  completed: "completed",
};

export default function Checkout({ emptyCart }) {
  const [address, setAddress] = useState(emptyAddress);
  const [status, setStatus] = useState(STATUS.Idle);
  const [err, setErr] = useState("");
  const [isErorr, setIsError] = useState(false);

  function saveShippingData(data) {
    try {
      postData(data);
      emptyCart();
      setStatus(STATUS.completed);
    } catch (r) {
      setErr(r);
      setIsError(true);
    }
  }

  function handleChange(e) {
    setAddress((curAddress) => {
      return {
        ...curAddress,
        [e.target.id]: e.target.value,
      };
    });
    setStatus(STATUS.isSubmiting);
  }

  function handleBlur(event) {}

  async function handleSubmit(event) {
    event.preventDefault();
  }

  if (isErorr) {
    return <h3>there is an Error : {err}</h3>;
  }
  if (status === "completed") {
    return <h3>your payment is completed </h3>;
  }
  return (
    <>
      <h1>Shipping Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            id="city"
            type="text"
            value={address.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            id="country"
            value={address.country}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div>
          <input
            onClick={() => saveShippingData(address)}
            disabled={status !== "isSubmiting"}
            type="submit"
            className="btn btn-primary"
            value="Save Shipping Info"
          />
        </div>
      </form>
    </>
  );
}
