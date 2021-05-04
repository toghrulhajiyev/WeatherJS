class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.feelsLike = document.querySelector('#w-feelsLike');
        this.wind = document.querySelector('#w-wind');
    }

    // Show Weather
    showWeather(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} Pa`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} °C`
        this.wind.textContent = `Winds: ${weather.wind.speed} km/h`;
    }

    // Show Alert
    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');

        // Add class to the element
        div.className = className;

        // Append text node to the alert
        div.append(document.createTextNode(message));

        // Add style to div
        div.style.cssText = `
        position: fixed;
        bottom: 10%;
        right: 5%;
        `;

        // Append alert to body
        document.body.append(div);

        // Remove after 2sec
        setTimeout(() => {
            div.remove();
        }, 2000);
    }
}