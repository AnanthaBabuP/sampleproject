import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import axios from 'axios';

const CarUpdateScreen = () => {
    const { carId } = useParams(); // Get carId from URL params
    const navigate = useNavigate(); // For navigating after updating
    const [carDetails, setCarDetails] = useState({
        name: '',
        model: '',
        basicAmount: '',
        tax: '',
        maxAmount: ''
    });

    useEffect(() => {
        // Fetch current car data from the API using carId
        axios.get(`http://localhost:8081/api/cars/${carId}`)
            .then((response) => {
                setCarDetails(response.data); // Set the car details into state
            })
            .catch((error) => {
                console.error('Error fetching car data:', error);
            });
    }, [carId]); // Re-fetch if carId changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the updated data to the backend
        axios.put(`http://localhost:8081/api/cars/${carId}`, carDetails)
            .then((response) => {
                console.log('Car updated successfully:', response.data);
                moveBack();
            })
            .catch((error) => {
                console.error('Error updating car data:', error);
                alert('Error updating car details');
            });
    };
    const moveBack=()=>{
        navigate('/list');
    }

    return (
        <div className="App">
            <h2>Update Car Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='Container'><label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={carDetails.name}
                        onChange={handleChange}
                    />
                </label>
                </div>
                <div className='Container'>
                    <label>
                        Model:
                        <input
                            type="text"
                            name="model"
                            value={carDetails.model}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='Container'>
                    <label>
                        Basic Amount:
                        <input
                            type="number"
                            name="basicAmount"
                            value={carDetails.basicAmount}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='Container'>
                    <label>
                        Tax:
                        <input
                            type="number"
                            name="tax"
                            value={carDetails.tax}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='Container'>
                    <label>
                        Max Amount:
                        <input
                            type="number"
                            name="maxAmount"
                            value={carDetails.maxAmount}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='Container'>
                    <button type="submit">Update Car</button>
                </div>
                <div className='Container'>
                    <button type="button" onClick={moveBack}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default CarUpdateScreen;
