import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  increment,
  incrementByAmount,
  userData,
} from "./state/reducer/counterReducer";

const Info = () => {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const data = useSelector((state) => state.counter.user);
  const dispatch = useDispatch();
  console.log(data);
  const [amount, setAmount] = useState();
  const handleSubmit = (user,e) => {
    console.log(user);
    user.preventDefault()
    setAmount(user);
  };
  return (
    <div>
      {/* <p>{count}</p>
      <p>{name}</p> */}
      <h1>{data}</h1>
      <form onSubmit={handleSubmit}>
        <input text="text" name="name" placeholder="name" />
        <button type="submit" onClick={() => dispatch(userData(amount))}>submit</button>
      </form>

      {/* <button onClick={() => dispatch(changeName("uswa"))}> Name</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>click me </button> */}
    </div>
  );
};

export default Info;
