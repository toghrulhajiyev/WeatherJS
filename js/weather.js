class Weather {
    constructor() {
        this.key = '5f3d870e8c6b6999cc779a40c770f266';
    }

    async getWeather(city, state) {
        let weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=${this.key}&units=metric`);  

        let weather = await weatherResponse.json();

        return weather;
    }
}