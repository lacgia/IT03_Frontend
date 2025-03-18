let money=parseFloat(prompt("nhap vao so tien muon tinh: "));
let month=parseInt(prompt("month"));

let lsmonth=4.3/12/100;
let tienlai=money*lsmonth*month;

document.writeln("tong tien lai la: "+tienlai.toFixed(2));