// const apiKey = process.env.API_KEY;
const apiKey = "40d17ecc48a627df54760b7c5f3649b1";
const weatherIcon = document.querySelector(".weather-icon");

const getLocation = () => {
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value.slice(0, 2).toUpperCase();
    return { city: city, country: country }
}

const fetchWeather = async () => {
    let location = getLocation();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${apiKey}`,


        {
            method: 'GET',
            'Content-Type': 'application/json',
        }
    );
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h `;

    let weatherDesc = data.weather[0].main.toLowerCase();
    weatherIcon.src = `${weatherDesc}.png`;
}