$(document).ready(function() {

    $("#submitCity").click(function() {
        return getWeather();

    });



});

function getWeather() {
    var city = $("#city").val();

    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=ce9c9e80c5e50c93f0c8da9e286dd073",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                console.log(data)
                var widget = showResults(data)


                $("#showWeather").html(widget);

                $("#city").val('')
            }

        });

    } else {
        $("#error").html("<div>City Field cannot be empty</div>");
    }

}


function showResults(data) {
    return '<h2>Current Weather for ' + data.name + ', </h2>' +
        "<p>Sunrise: " + data.sys.sunrise + "</P>" +
        "<p>Weather Id: " + data.weather.id + "</P>" +
        "<p>Weather Main: " + data.weather.main + "</P>" +
        "<p>Weather Description: " + data.weather.description + "</P>" +
        "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
        "<p>Pressure: " + data.main.pressure + "</P>" +
        "<p>Feels Like: " + data.main.feels_like + "&deg;F</p>" +
        "<p>Humidity: " + data.main.humidity + "</P>" +
        "<p>Temperature Low: " + data.main.temp_min + "&deg;F</p>" +
        "<p>Temperature High: " + data.main.temp_max + "&deg;F</p>" +
        "<p>Wind Speed: " + data.wind.speed + "</p>" +
        "<p>Wind Degree: " + data.wind.deg + "</p>" +
        "<p>Wind Gust: " + data.wind.gust + "</p>" +
        "<p>Clouds: " + data.clouds.all + "&deg;%</p>" +
        "<p>Sunset: " + data.sys.sunset + "</P>";



















}