class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} working ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} has salary ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'proccess creating app'
  }
}

class QA extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'proccess testing app'
  }
}

const dev = new Developer('Tim', 1000)
console.log(dev.getPaid())
console.log(dev.work())

const qa = new QA('Vlad', 700)
console.log(qa.getPaid())
console.log(qa.work())
