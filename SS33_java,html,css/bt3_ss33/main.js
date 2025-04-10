let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" },
];


let danhmuc=document.getElementById("danhmuc");
let but=document.getElementById("but");
let ul=document.getElementById("my-ul");


function loc(){
   let  danhmucc=danhmuc.value
   ul.innerHTML="";
   let ulfilter=dish.filter(item=>item.category===danhmucc);
    

    ulfilter.forEach(item=>{
        let newli=document.createElement("li");
        newli.textContent="name: "+item.name+" danh muc: "+item.category;
        ul.appendChild(newli)
    });
}

but.onclick=loc;
