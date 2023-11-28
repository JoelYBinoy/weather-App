function getData() {
    let cityN = cityName.value
    if (cityN == "") {

        alert("Please Enter a City Name")

    }
    else {

        const http = new XMLHttpRequest()



        http.open('get', `https://api.openweathermap.org/data/2.5/weather?q=${cityN}&appid=8e21e00b9bc53215038bd9c1741b2a65`)


        http.send();

        http.onreadystatechange = () => {
            //console.log(http.readyState);




            if (http.readyState == 4) {
                const result = http.responseText
                const weatherData = JSON.parse(result)
                //console.log(weatherData)


                let name = weatherData.name
                //console.log(name)

                let temp = (weatherData.main.temp - 273).toFixed(1)  // to reduce the decimal points to atmost 2 values
                //console.log("Temperature is: ",+temp,"°C")

                let humid = weatherData.main.humidity
                console.log(humid)

                let wind = weatherData.wind.speed
                console.log(wind)

                let description = weatherData.weather[0].description

                let pressure = weatherData.main.pressure

                let countryName = weatherData.sys.country





                card1.innerHTML = ` 
<div class="city">
<p class="text-center" >${name}</p>
</div>
<img id = "weatherIcon" height="150px"  width="150px"  alt="">

            <p id = "description" class="text-center" >${description}</p>

<div class="temperature mt-3">
<p class="text-center">${temp} °C</p>
</div>
<div class ="subDiv d-flex mt-5" >
<div class="humidity">
<p>Humidity:<br> <span class="humidSpan" > ${humid}% </span> </p>
</div>
<div class="wind">
<p >Wind: <br>  <span class="windSpan"> ${wind}m/s </span></p>
</div>
</div>

<div class ="subDiv d-flex mt-5" >
<div class="pressure">
<p>Pressure:<br> <span class="pressureSpan" > ${pressure}hPa </span> </p>
</div>
<div class="country">
<p >Country: <br>  <span class="countrySpan"> ${countryName}</span></p>
</div>
</div>

`


                if (weatherData.weather[0].main == "Clouds") {
                    weatherIcon.src = "./Images/clouds.png"
                }
                else if (weatherData.weather[0].main == "Rain") {
                    weatherIcon.src = "./Images/rain.png"
                }
                else if (weatherData.weather[0].main == "Drizzle") {
                    weatherIcon.src = "./Images/drizzle.png"
                }
                else if (weatherData.weather[0].main == "Clear") {
                    weatherIcon.src = "./Images/clear.png"
                }
                else if (weatherData.weather[0].main == "Mist") {
                    weatherIcon.src = "./Images/mist.png"
                }
                else if (weatherData.weather[0].main == "Snow") {
                    weatherIcon.src = "./Images/snow.png"
                }else{
                    weatherIcon.src = "./Images/clouds.png"
                }


            }
        }




    }
}