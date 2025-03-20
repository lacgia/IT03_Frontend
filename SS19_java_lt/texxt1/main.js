let statuss=prompt("nhap status: ");
let lac= (statuss==="woking")? "dang lam viec": (statuss==="on_leave")? "dang nghi phep": (statuss==="resined")?"da nghi viec": (statuss==="terminated")?"bi sa thai": "trang thai khong hop le"

alert(lac);