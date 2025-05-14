// Array of Cities
        const cities = [
            'Delhi', 
            'London', 
            'Paris', 
            'Tokyo', 
            'New York', 
            'Sydney', 
            'Cape Town', 
            'Abuja', 
            'Berlin',
            'Rome',
            'Belgrade',
            'Vienna',
            'Freetown', 
            'Addis Ababa', 
            'Lagos', 
            'Johannesburg', 
            'Jerusalem',
            'Kingston',
            'Nassau',
            'Gaborone',
            'Atlanta',
            'Moscow', 
            'Kinshasa', 
            'Kampala', 
            'Lisbon',
            'Nairobi',
            'Mumbai',
            'Kigali', 
            'Cairo',
            'Toronto', 
            'Monrovia',
            'Windhoek'
        ];

        function getRandomCity() {
                const randomIndex = Math.floor(Math.random() * cities.length);
                return cities[randomIndex];
            }

        // Generate a different city name on each reload
        const city = getRandomCity();

        var request = new XMLHttpRequest();

        const apiKey = '0fadf96d2336ead026424b46f3be5560';
        link=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        request.open('GET', link, true);

        request.onload = function(){
            var dataObj = JSON.parse(this.response);

            console.log(dataObj)

            document.getElementById("weather").innerHTML = dataObj.weather[0].description;
            document.getElementById("location").innerHTML = dataObj.name;
            document.getElementById("temp").innerHTML = Math.round(dataObj.main.temp - 273.15);
            document.getElementById("icon").src = "https://openweathermap.org/img/w/" + dataObj.weather[0].icon + ".png";
            document.getElementById("humidity").innerHTML = dataObj.main.humidity;
            document.getElementById("wind").innerHTML = dataObj.wind.speed;
        }

        if(request.status >= 200 && request.status < 400){
            var temp = dataObj.main;
        }else {
            console.log("The city data is unavailable");
        }
        request.send();