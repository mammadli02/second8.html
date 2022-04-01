const car = {
    manufacturer: 'Ferrari',
    model: '488GTB',
    price: 220000,
    mileage: 120000,
    isEngineOn: false,
    isBroken: false,
  
    turnOn: function () {
        this.isEngineOn = true;
        this.mileage=120000
        this.printState();
    },
    turnOff: function () {
      this.isEngineOn = false;
      this.mileage=120000
      this.printState();
  },
  
  nobrake: function () {
  this.isBroken=false;
  this.isEngineOn =true;
  this.mileage=120000
  this.printState();
  
  },
  brake:function(){
    this.isBroken=true;
    this.isEngineOn = false;
    this.mileage=120000
    this.printState();
  },
  
  travel: function () {
  this.isBroken=false;
  this.isEngineOn =true;
  this.mileage += 15000
  this.printState();
  
  
  },
  notravel: function () {
    this.isBroken=true;
    this.isEngineOn =false;
    this.mileage=120000
    this.printState();
    
    
    },
    
  
  
  
  printState: function () {
      console.log("=====================");
      console.log(car.manufacturer, car.model, car.price);
      console.log("Mileage:", car.mileage);
      console.log("Is engine on?", car.isEngineOn);
      console.log("is car broken?", car.isBroken);
      console.log("======================")
  }
  }
  
  window.onkeypress = function (e) {
  if (e.key === 'r') {
      car.turnOn();
  } else if (e.key === 't') {
      car.turnOff();
  }else if (e.key === 'y') {
    car.nobrake();
  
  }else if (e.key === 'w') {
    car.brake();
  }else if (e.key === 'z'){
    car.travel()
  }else if (e.key === 'e'){
    car.notravel()
  }
  }
  