class Vehicle{
    constructor(type, model, receivedParts, fuel){
        this.type = type;
        this.model = model;
        this.parts = {};
        this.parts.engine = receivedParts.engine;
        this.parts.power = receivedParts.power;
        this.parts.quality = receivedParts.engine * receivedParts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}