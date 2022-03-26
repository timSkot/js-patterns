class Databae {
  constructor(data) {
    if(Databae.exists) {
      return Databae.instance
    }
    Databae.instance = this
    Databae.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Databae('MongoDB')
console.log(mongo.getData())

const mySql = new Databae('MySQL')
console.log(mySql.getData())