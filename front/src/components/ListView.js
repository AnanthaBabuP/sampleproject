import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8081";

function ListView() {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Fetch all cars from the backend
        axios.get('/api/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the cars!', error);
            });
    }, []);

    const handleDelete = (carId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (confirmDelete) {
            axios.delete(`/api/cars/${carId}`)
                .then(response => {
                    setCars(cars.filter(car => car.id !== carId));  // Remove the deleted car from the state
                    alert("Car deleted successfully");
                })
                .catch(error => {
                    console.error("Error deleting car:", error);
                    alert("Error deleting car");
                });
        }
    };




    const handleEdit = (e) => {
        navigate(`/update/${e.id}`);
    };

    return (
        <div className="App">
            <h1>Car List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Basic Amount</th>
                        <th>Tax Amount</th>
                        <th>Max Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={car.id}>
                            <td>{index+1}</td>
                            <td>{car.name}</td>
                            <td>{car.model}</td>
                            <td>{car.basicAmount}</td>
                            <td>{car.tax}</td>
                            <td>{car.maxAmount}</td>
                            <td>
                                <button onClick={() => handleEdit(car)}>Update</button>
                                <button onClick={() => handleDelete(car.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ListView;
