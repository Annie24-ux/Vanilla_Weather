function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);

    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;

    temperatureElement.innerHTML = temperature;
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


