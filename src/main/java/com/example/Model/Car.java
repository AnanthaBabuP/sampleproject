package com.example.Model;

import jakarta.persistence.*;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String model;
    private double basicAmount;
    private double tax;
    private double maxAmount;

    // Constructors
    public Car() {}

    public Car(String name, String model) {
        this.name = name;
        this.model = model;
    }

    public Car(String name, String model, double basicAmount, double tax, double maxAmount) {
        this.name = name;
        this.model = model;
        this.basicAmount = basicAmount;
        this.tax = tax;
        this.maxAmount = maxAmount;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getBasicAmount() {
        return basicAmount;
    }

    public void setBasicAmount(double basicAmount) {
        this.basicAmount = basicAmount;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getMaxAmount() {
        return maxAmount;
    }

    public void setMaxAmount(double maxAmount) {
        this.maxAmount = maxAmount;
    }

   
}

