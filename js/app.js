const changeBtn = document.querySelector('#w-change-btn');
const cityInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');

changeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const cityName = cityInput.value;
    const stateName = stateInput.value;

    // Instantiate weather API
    const weatherData = new Weather();

    // Instantiate UI
    const ui = new UI();

    // City weather data
    weatherData.getWeather(cityName, stateName)
        .then((data) => {
            if(data.cod === '404') {
                ui.showAlert('City not found !', 'alert alert-danger');
            } else {
                ui.showWeather(data);
            }
        });

    // Close modal
    $('#locModal').modal('hide');
});