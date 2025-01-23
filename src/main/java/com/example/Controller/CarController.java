package com.example.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Model.Car;
import com.example.Service.CarService;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    // Register a list of cars
    @PostMapping
    public ResponseEntity<List<Car>> registerCar(@RequestBody List<Car> cars) {
        List<Car> savedCars = carService.registerCar(cars);
        return new ResponseEntity<>(savedCars, HttpStatus.CREATED);
    }

    // Get all cars
    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping("{id}")
    public Optional<Car> getCarById(@PathVariable long id){
        return carService.findById(id);
    }

    // Edit a car
    @PutMapping("{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carDetails) {
        Car updatedCar = carService.updateCar(id, carDetails);
        return ResponseEntity.ok(updatedCar);
    }
    // Delete Car 
    @DeleteMapping("{id}")
    public boolean deleteCar(@PathVariable int id){
        return carService.deleteCar((long) id);
    }
}
