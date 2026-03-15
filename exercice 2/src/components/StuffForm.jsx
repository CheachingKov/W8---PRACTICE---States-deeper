import React, { useState } from "react";

export default function StuffForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimName = name.trim();
    const numPrice = Number(price);
    if(!trimName || Number.isNaN(numPrice)) return;
    onAdd(trimName, numPrice);
    setName("");
    setPrice("");
  };
  
  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" 
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Stuff price</p>
      <input type="search" placeholder="15" 
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
