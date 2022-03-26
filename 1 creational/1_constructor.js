class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('Aws German', '81.21.21.32')
console.log(aws.getUrl())