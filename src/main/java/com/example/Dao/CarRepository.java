package com.example.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Car;

public interface CarRepository extends JpaRepository<Car,Long>{
    public Car findByName(String name);

}
