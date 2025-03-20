let choice=prompt("nhap vao lua chon cua ban(1: vnd->usd, 2: usd->vnd");
let tigia=23000;

if(choice==1){
    let vnd=prompt("nhap vao so vnd->usd");
    let usd=vnd/tigia;
    alert(vnd+" VND= "+ usd.toFixed(2)+"usd");
}else if(choice==2){
    let usd=prompt("nhap vao so usd->vnd");
    let vnd=usd*tigia;
    alert(usd+" usd= "+ vnd.toLocaleString()+"vnd");
}
