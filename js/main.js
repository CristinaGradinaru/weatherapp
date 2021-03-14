window.addEventListener('load', () => {
    currentWeather.fetchWeather('london')
});

let currentWeather = {
    fetchWeather: async (city) => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=imperial&appid=")
        let data = await response.json();
        return displayWeather(data)
    }
}

const search = function(){
    var val = document.getElementById("search-bar").value;
    console.log(val)
    currentWeather.fetchWeather(val)
}

const displayWeather = (data) => {
    let city = data.name
    let icon = data.weather[0].icon
    let description = data.weather[0].description
    let humidity = data.main.humidity
    let temp_min = Math.ceil(data.main.temp_min)
    let temp_max = Math.ceil(data.main.temp_max)
    console.log(city, icon, description, humidity, temp_max, temp_min)
    document.querySelector('.thecity').innerHTML = "Weather in " + city;
    document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.description1').innerHTML = 'Humidity ' + humidity + ' %';
    document.querySelector('.degree-low').innerHTML = temp_min;
    document.querySelector('.degree-high').innerHTML = temp_max;
};

