class Weather {
  constructor(client) {
    this.client = client;
    this.data = null;
  }

  fetch(city) {
    return new Promise((resolve, reject) => {
      this.client.fetchWeatherData(city, (body) => {
        this.data = body;
        resolve(body);
      });
    });
  }

  getWeatherData() {
    return this.data;
  }
}

module.exports = Weather;
