let hour=parseInt(prompt("nhap vao gio"));
let minute=parseInt(prompt("nhap vao phut"));
let second=parseInt(prompt("nhap vao s"));

let  lac;
if (hour>= 12) {
    lac="PM";
}else{
    lac="AM";
}
let hour12;
if (hour% 12=== 0) {
    hour12= 12;
}else{
    hour12 =hour% 12;
}

if (minute< 10) {
    minute="0" + minute;
}
if (second< 10) {
    second = "0" + second;
}

alert("time: " + hour12 + ":" + minute + ":" + second + " " + lac);

