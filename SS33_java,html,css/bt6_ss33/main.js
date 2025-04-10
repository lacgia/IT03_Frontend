const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "⛅"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

let input=document.getElementById("input");
let but=document.getElementById("but");
console.log(weatherData);







/*<span class="sun">☀️</span>
<span class="oc">32&deg;C</span>
<div class="mini">
    <span id="wather">Nang</span>
    <span id="doam">do dam: 75%</span>
    <span id="speed">toc do gio:70km/h</span>
*/

let sun=document.getElementById("sun");
let oc=document.getElementById("oc")
let wather=document.getElementById("wather")
let doam=document.getElementById("doam")
let speed=document.getElementById("speed")
let city=document.getElementById("city")

function search(){
    let keyinput=input.value
    if(keyinput==""){
        alert("vui long nhap vao");
        return;
    }
    let data=weatherData[keyinput];
    console.log(data);
    
    if(data){
        city.innerText=input.value;
        sun.innerText=data.icon;
        oc.innerHTML=`${data.temperature}&deg;C`
        wather.innerText=data.description
        doam.innerText=`doam: ${data.humidity}`
        speed.innerText=`toc do gio:${data.windSpeed}`

    }else{
        alert("khong co");
    }
   
}

but.onclick=search