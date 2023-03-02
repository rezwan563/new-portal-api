const weatherData = () =>{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=23.71&longitude=90.41&hourly=temperature_2m`;
    console.log(url)
    fetch(url)
    .then(res => res.text())
    .then(data => displayWeather(data))
    .catch(error => console.log(error))


}


const displayWeather = (data) => {
    const chart = document.getElementById("weather-chart");
    console.log(data)
}
// weatherData()

const date = new Date();
console.log(date.toJSON())