let date1=prompt("nhap vao kh time 1: (YY-MM-DO)");
let date2=prompt("nhap vao kh time 2: (YY-MM-DO)");

let lac1=new Date(date1);
let lac2=new Date(date2);

let daytime = Math.abs(lac2 - lac1);
let realtimeday = Math.ceil(daytime / (1000 * 60 * 60 * 24));

document.writeln("do lech  ngay la: "+ realtimeday);

