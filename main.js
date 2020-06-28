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
    return "<p>Temperature: " + data.main.temp + "&deg;F</p>";
}