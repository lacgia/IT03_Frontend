
let contents = [
    {
        id: "1",
        name: "lac"
    }
]


function add() {
    let input = document.getElementById("input-Text").value.trim();

    if (!input) {
        alert("không được bỏ trống");
        return;
    } else {
        let newvalue = { name: input }
        contents.push(newvalue);
    }
    console.log(contents);
    localStorage.setItem("contents", JSON.stringify(contents));
    show();

}


function show() {
    let ul = document.getElementById("my-Ul");

    let html = "";
    contents.forEach((user, index) => {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <p>${user.name}</p>
        <button onclick="dele(${index})" class="btn btn-danger btn-sm">xóa</button>
        </li>`
    })

    ul.innerHTML=html;
}

function dele(index){
    if(confirm ("vui long có muốn xóa không")){
        contents.splice(index,1);
        show();
    }
}

function showStore(){
 const lac=JSON.parse(localStorage.getItem("contents")) || [];
 let ul = document.getElementById("my-Ul");

 let html = "";
 lac.forEach((user, index) => {
     html += `<li class="list-group-item d-flex justify-content-between align-items-center">
     <p>${user.name}</p>
     <button onclick="dele(${index})" class="btn btn-danger btn-sm">xóa</button>
     </li>`
 })

 ul.innerHTML=html;
}

show();
