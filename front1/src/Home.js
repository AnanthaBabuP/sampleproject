import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import CarForm from './components/CarForm';
import axios from 'axios';
import './App.css';
import SecondTable from './components/SecondTable';
import ThirdTable from './components/ThirdTable';

axios.defaults.baseURL = "http://localhost:8081";

function Home() {
    const [cars, setCars] = useState([]);
    const [pendingCars, setPendingCars] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleAddCar = (car) => {
        setPendingCars([...pendingCars, car]);
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (confirmDelete) {
            const updatedPendingCars = pendingCars.filter((_, i) => i !== index);
            setPendingCars(updatedPendingCars);
        }
    };

    const handleDeleteCars = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (confirmDelete) {
            const updatedCars = cars.filter((_, i) => i !== index);
            setCars(updatedCars);
        }
    };

    const handleUpdateCar = (index) => {
        const carToUpdate = pendingCars[index];

        setCars([...cars, carToUpdate]);

        // Remove the car from pendingCars
        const updatedPendingCars = pendingCars.filter((_, i) => i !== index);
        setPendingCars(updatedPendingCars);
    };

    const handleUpdateCars = (index, field, value) => {
        const updatedCars = cars.map((car, i) =>
            i === index ? { ...car, [field]: value } : car
        );
        setCars(updatedCars);
    };

    const handleRegister = () => {
        // Validation logic
        if (cars.length === 0) {
            alert("No cars to register. Please add at least one car.");
            return;
        }

        let hasErrors = false; // Flag to track if there are validation errors
        cars.map((car, index) => {
            let error = "";

            if (!car.name || car.name.trim() === "") {
                error += "Name is required. ";
            }
            if (!car.model || car.model.trim() === "") {
                error += "Model is required. ";
            }
            if (!car.basicAmount || isNaN(car.basicAmount) || car.basicAmount <= 0) {
                error += "Basic Amount must be a number greater than 0. ";
            }
            if (car.tax === null || car.tax === undefined || isNaN(car.tax) || car.tax < 0) {
                error += "Tax must be a non-negative number. ";
            }
            if (!car.maxAmount || isNaN(car.maxAmount) || car.maxAmount <= 0) {
                error += "Max Amount must be a number greater than 0. ";
            }

            if (error) {
                hasErrors = true; // Mark validation as failed
                alert(`Car ${index + 1}: ${error}`); // Show validation errors for each car
            }
            return { ...car, error };
        });

        if (hasErrors) {
            return; // Stop submission if any car has validation errors
        }

        axios.post("/api/cars", cars, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("Cars registered successfully:", response.data);
                    setPendingCars([]);  // Clear the pending cars after successful registration
                    setCars([...cars, ...response.data]);  // Assuming response contains the newly registered cars
                    alert("Cars registered successfully!");

                    navigate('/list');  // This will redirect the user to /list
                } else {
                    alert("Failed to register cars. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error during registration:", error);
                alert("Error: " + (error.message || error));
            });
    };

    return (
        <div className="App">
            <h1>Car Registration</h1>
            <CarForm onAddCar={handleAddCar} />

            <SecondTable
                pendingCars={pendingCars}
                onDelete={handleDelete}
                onUpdate={handleUpdateCar}
            />


            <ThirdTable
                cars={cars}
                onDelete={handleDeleteCars}
                onUpdate={handleUpdateCars}
            />
            {cars?.length > 0 && (
                <>
                    <button type='button' onClick={handleRegister}>
                        Register
                    </button>
                </>
            )}
        </div>
    );
}

export default Home;
