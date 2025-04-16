
let list = [




];





let storeList = JSON.parse(localStorage.getItem("list"));
if (storeList) {
    list = storeList;
}



let tbody = document.getElementById("body");
let pagelength = 3;
let curpage = 1;

let pagination = document.getElementById("pagination");


let name = document.getElementById("name");
let role = document.getElementById("role");

function add() {
    let curname = name.value.trim();
    let currole = role.value.trim();

    if (!curname || !currole) {
        alert("nhap sai tt");
        return;
    }

    let newstt = list.length + 1;
    console.log(newstt);

    list.push({ id: newstt, name: curname, role: currole });
    name.value = "";
    role.value = "";

    renderlist();
    localStorage.setItem("list", JSON.stringify(list))||[];
}

function renderlist(page = 1) {   //page =1 la gia tri mac dinh neu nguoi dung khong truyen bat ki tham so gi 
    curpage = page;
    let start = (page - 1) * pagelength;
    let end = page * pagelength;

    let currentpagedata = list.slice(start, end);
    console.log(currentpagedata);


    let html = "";
    currentpagedata.forEach((data, index) => {
        html += `
<tr>
    <td>${start + index + 1}</td>
    <td>${data.name}</td>
    <td>${data.role}</td>
</tr>
`
    })
    console.log(html)
    tbody.innerHTML = html;
    renderPagination()
}






function renderPagination() {
    let totalpage = Math.ceil(list.length / pagelength);

    let html = "";
    html += `<button class="btn btn-primary mx-1" onclick="renderlist(${curpage - 1})"   ${curpage == 1 ? "disabled" : ""}>previous</button>`;

    for (let i = 1; i <= totalpage; i++) {
        html += `<button class="btn btn-primary mx-1" onclick="renderlist(${i})"   ${curpage == i ? "disabled" : ""}>${i}</button>`
    }

    html += `<button class="btn btn-primary mx-1" onclick="renderlist(${curpage + 1})"  ${curpage == totalpage ? "disabled" : ""}  >next</button>`

    pagination.innerHTML = html;
}


function saveToLocalStore() {
    localStorage.setItem("list", JSON.stringify(list)) || [];
}

renderlist();



