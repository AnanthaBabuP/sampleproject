package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Dao.CarRepository;
import com.example.Model.Car;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    // Save car to database
    public List<Car> registerCar(List<Car> cars) {
        return carRepository.saveAll(cars);
    }

    // Get all cars from the database
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    // Edit car details
    public Car updateCar(Long id, Car carDetails) {
        Car car = carRepository.findById(id).orElseThrow();
        car.setName(carDetails.getName());
        car.setModel(carDetails.getModel());
        car.setBasicAmount(carDetails.getBasicAmount());
        car.setTax(carDetails.getTax());
        car.setMaxAmount(carDetails.getMaxAmount());
        return carRepository.save(car);
    }

    public boolean deleteCar(Long id) {
        Optional<Car> car = carRepository.findById(id);
        if(!car.isEmpty()){
            carRepository.deleteById(id);
            return true;
        }
        else return false;
    }

    public Optional<Car> findById(long id) {
        return carRepository.findById(id);
    }
}

