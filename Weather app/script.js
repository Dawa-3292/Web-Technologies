// async function defaultinfo(){
//     const respponse=await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bharatpur&appid=a82b056b152bb85decf8fc188fe5074c");
//     const data=await response.json();
//     console.log(data);

//     document.querySelector("#cityname").innerHTML=data.name;
//     document.querySelector("#weatherstatus").innerHTML=data.weather[0]["main"];
//     document.querySelector("#temperature").innerHTML=data.main["temp"] + " ℃";
//     document.querySelector("#press").innerHTML=data.main["pressure"] + " Pa";
//     document.querySelector("#humidity").innerHTML=data.main["humidity"]+" %";
//     document.querySelector("#wind").innerHTML=data.wind["speed"]+" Km/h";

// }
// defaultinfo();

const weathericon=document.querySelector(".weather-icon")
const apikey="a82b056b152bb85decf8fc188fe5074c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchinput=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const date=new Date();
document.getElementById("daydate").innerHTML=date;
async function updateweather(city){
    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector("#cityname").innerHTML=data.name;
    document.querySelector("#weatherstatus").innerHTML=data.weather[0]["main"];
    document.querySelector("#temperature").innerHTML=data.main["temp"] + " ℃";
    document.querySelector("#press").innerHTML=data.main["pressure"] + " Pa";
    document.querySelector("#humidity").innerHTML=data.main["humidity"]+" %";
    document.querySelector("#wind").innerHTML=data.wind["speed"]+" Km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="rains.png";
    }
}
document.addEventListener("click",()=>{
    updateweather(searchinput.value);
})
