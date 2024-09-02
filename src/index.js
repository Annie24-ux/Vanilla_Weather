function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);

    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;

    temperatureElement.innerHTML = temperature;

    let descriptionElement = document.querySelector("#description");
    let description = response.data.condition.description;
    descriptionElement.innerHTML = ", " + description;


    let humidElement = document.querySelector("#humid");
    let humid = response.data.temperature.humidity;
    humidElement.innerHTML = humid + " %";

    let windElement = document.querySelector("#wind");
    let wind = response.data.wind.speed;
    windElement.innerHTML = wind + " km/h";

    let iconElement = document.querySelector("#weather-icon");
    // let icon = response.data.condition.icon;
    // iconElement.innerHTML = icon;
}



function citySearch(city){
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(weatherUrl);

    axios.get(weatherUrl).then(refreshWeather);
}


function searchSubmitHandler(event){
    event.preventDefault();
    let searchInput = document.querySelector("#form-input");

    citySearch(searchInput.value);
}





let searchFormElement = document.querySelector("#answer");
searchFormElement.addEventListener("click", searchSubmitHandler);


