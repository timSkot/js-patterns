class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model)
  }
}

const factory = new CarFactory()

const bmwx6 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
const bmwx3 = factory.create('bmw', 13000)
console.log(bmwx6)
console.log(audi)
console.log(bmwx3)
