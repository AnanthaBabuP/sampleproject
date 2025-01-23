import React, { useState } from "react";

function CarForm({ onAddCar }) {
  const [car, setCar] = useState({ name: '', model: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar(car);
    onClear();

  }
  const onClear = () => {
    setCar({
      name: '',
      model: ''
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Car Name" id="name" name="name" value={car.name} onChange={handleChange} required/>
        <input type="text" placeholder="Car Model" id="model" name="model" value={car.model} onChange={handleChange} required/>
        <input type="submit" value="Add" />
        <button type="button" onClick={onClear}>Clear</button>
      </form>
    </>)
}

export default CarForm;