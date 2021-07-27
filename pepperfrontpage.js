

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*Coundown Javascript*/


const countdown = () =>{

 
  const countDate =new Date('June 21, 2022 00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second =1000;
  const minute = second * 60;
  const hour = minute*60;
  const day = hour*24;

  const daysLeft = Math.floor(gap/ day);
  const hoursLeft= Math.floor((gap % day)/hour);
  const minLeft= Math.floor((gap % hour)/minute);

  document.querySelector(".day").innerText = daysLeft;
  document.querySelector(".hour").innerText=hoursLeft;
  document.querySelector(".minute").innerText=minLeft;
  
console.log(daysLeft);
console.log(hoursLeft);
console.log(minLeft);


};
countdown()
setInterval(countdown, 60000)


 /* Get current Weather Information */

 const iconElement = document.querySelector(".weather-icon");
 const tempElement = document.querySelector(".temperature p");
 const feelsLikeElement = document.querySelector(".feels_like p")
 const humidity = document.querySelector(".humidity p")
 const descElement= document.querySelector(".temperatureDescription p");
 const locationElement = document.querySelector(".location p");
 const notificationElement = document.querySelector(".notification");
 

 const weather ={};

 weather.temperature={
   unit:"celcius"
 }

 weather.feels_like={
  unit:"celcius"
}

weather.humidity={}

 const KELVIN=273;

//api key
 const key ="1d15d9abf01fbd1f286b1d277f06ff72";

//check if the browswer supports geolocation
 if('geolocation' in navigator){
     navigator.geolocation.getCurrentPosition(setPosition, showError);
 }else{
     notificationElement.style.display="block";
     notificationElement.innerHTML = "<p>Browser does not support geolocation</p>";
 }


//set the users position

function setPosition(position){
 let latitude=position.coords.latitude;
 let longitude = position.coords.longitude;

 getWeather(latitude, longitude);
}

// show error if there is an an issue with geolocation
function showError(error){
 notificationElement.style.display="block";
 notificationElement.innerHTML=`<p> ${error.message}</p>`;
}

//Get Weather from API
function getWeather(latitude, longitude){
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  
  fetch(api)
    .then(function(response){
        let data = response.json();
        return data;})

    .then(function(data){
        weather.temperature.value = Math.floor((data.main.temp - KELVIN)*1.8+32);
        weather.feels_like.value = Math.floor((data.main.feels_like - KELVIN)*1.8+32);
        weather.iconId = data.weather[0].icon;
        weather.humidity.value = data.main.humidity;
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
      })
    .then(function(){
        displayWeather();
      });
    }


//Display the Weather
function displayWeather(){
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value} \xB0 F`;
  feelsLikeElement.innerHTML = `${weather.feels_like.value}\xB0 F`;
  humidity.innerHTML = `${weather.humidity.value} %`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
