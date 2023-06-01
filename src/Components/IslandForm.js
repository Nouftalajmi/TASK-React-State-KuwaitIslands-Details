import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const handlesubmit = () => {
    window.confirm(`Are you sure you want to book to ${island.name}`);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={changeName} />
      <input
        placeholder="Type Phone Number"
        type="number"
        onchange={changePhone}
      />
      <button
        className="book"
        onClick={() => {
          handlesubmit();
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
