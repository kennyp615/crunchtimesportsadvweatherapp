$(document).ready(function() {

    $("#submitForecast").click(function() {
        return getForecast();

    });



});

function getForecast() {
    var city = $("#city").val();
    var days = $("#days").val();

    if (city != '' && days != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=imperial" + "&cnt=" + days + "&APPID=ce9c9e80c5e50c93f0c8da9e286dd073",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {

                var table = '';

                for (var i = 0; i < .data.list.length; i++) {
                    table += "<tr>";

                    table += "<td>" + data.list[i].weather[0].icon + "</td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";

                    table += "</tr>";

                }

                $("#ForecastWeather").html(table);

                $("#city").val('');
                $("#days").val('')

            }

        });

    } else {
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }

}



function showResults(data) {
    return '<h2 style="font-weight:bolder; font-size:30px; padding-top:20px;" class="text-center">Current Weather for ' + data.name + ', </h2>' +
        "<h3 style='padding-left:40px;'><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Weather Description</strong>:<img src ='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" +
        "<h3 style='padding-left:40px;'><strong>Feels Like</strong>: " + data.main.feels_like + "&deg;F</h3>" +
        "<h3 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
        "<h3 style='padding-left:40px;'><strong>Temp Low</strong>: " + data.main.temp_min + "&deg;F<h3>" +
        "<h3 style='padding-left:40px;'><strong>Temp High</strong>: " + data.main.temp_max + "&deg;F</h3>" +
        "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Speed</strong>: " + data.wind.speed + " mph</h3>";