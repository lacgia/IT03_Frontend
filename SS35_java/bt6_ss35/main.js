let Products = JSON.parse(localStorage.getItem("Products"));

let addForm = document.getElementById("add_form");
let body = document.getElementById("body");
let over = document.getElementById("over");
let form_over = document.getElementById("container_form");
let tbody = document.getElementById("tbody");

let check_MDM = document.getElementById("check_MDM")
let check_TDM = document.getElementById("check_TDM")
let editIndex = null;

function show(arr=Products) {
    let html = "";
    arr.forEach((item, index) => {
        html += `
        <tr>
            <td>${item.MDM}</td>
            <td>${item.TDM}</td>
            <td>${item.status}</td>
            <td>
                <button onclick="editEvent(${index})">edit</button>
                <button onclick="remove(${index})">remove</button>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}





function add() {
    form_over.classList.remove("d-none");
    addForm.classList.remove("d-none");
 
}





function close_add() {
    form_over.classList.add("d-none");
    addForm.classList.add("d-none");
}





function submit_form(e) {


    e.preventDefault();
   
   
    let MDM = document.getElementById("MDM").value.trim();
    let TDM = document.getElementById("TDM").value.trim();
    let status = document.getElementById("radio_input").checked ? "dang hoat dong" : "ngung hoat dong";

    let isValid = true;

    if (!MDM) {
        check_MDM.classList.remove("d-none");
        isValid = false;
    } else {
        check_MDM.classList.add("d-none");
    }

    if (!TDM) {
        check_TDM.classList.remove("d-none");
        isValid = false;
    } else {
        check_TDM.classList.add("d-none");
    }

    if (!isValid) {
        return;
    }

    let newProduct = { MDM, TDM, status };

    if (editIndex !== null) {
        Products[editIndex] = newProduct;
    } else {
        Products.push(newProduct);
    }

    saveToLocalStore();
    show();
    clearInput();
    editIndex = null;


    form_over.classList.add("d-none");
    addForm.classList.add("d-none");
   
}



function search(){
    let searchContent=document.getElementById("input_search").value.toLowerCase();

    let searchItems=Products.filter((product)=>{
       return product.TDM.toLowerCase().includes(searchContent);
    })

    show(searchItems)
}







function saveToLocalStore() {
    localStorage.setItem("Products", JSON.stringify(Products));
 
}





function clearInput() {
    document.getElementById("MDM").value = "";
    document.getElementById("TDM").value = "";
    document.getElementById("radio_input").checked = true;
    document.getElementById("radioDefault2").checked = false;
}






function editEvent(index) {
    let product = Products[index];
    document.getElementById("MDM").value = product.MDM;
    document.getElementById("TDM").value = product.TDM;
    document.getElementById("radio_input").checked = product.status === "dang hoat dong";
    document.getElementById("radioDefault2").checked = product.status === "ngung hoat dong";

    form_over.classList.remove("d-none");
    addForm.classList.remove("d-none");

    editIndex = index;
}






function remove(index) {
    if (confirm("Xác nhận muốn xóa!")) {
        Products.splice(index, 1);
        saveToLocalStore();
        show();
    }
}


function sort_list(status){
    let newSortList=[];

    if(status== "all"){
        newSortList=Products;
    }else{
        newSortList =Products.filter(item=> item.status== status);
    }
    show(newSortList);
}

show();
