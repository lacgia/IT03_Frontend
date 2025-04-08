let butadd = document.getElementById("but");
let input = document.getElementById("input");
let container = document.getElementById("container");

function add() {
    let inputvalue = input.value.trim();
    if (inputvalue === "") {
        alert("Nhập vào đi");
        return;
    }

    let div = document.createElement("div");
    let p = document.createElement("p");
    let div2 = document.createElement("div");
    let edit = document.createElement("button");
    let dele = document.createElement("button");

    edit.textContent = "Sửa";
    dele.textContent = "Xóa";
    p.textContent = inputvalue;

    div.className = "box";
    div2.className = "butall";

    edit.onclick = function () {
        let newValue = prompt("Sửa nội dung:", p.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            p.textContent = newValue;
        }
    };

    dele.onclick = function () {
        container.removeChild(div);
    };

    div2.appendChild(edit);
    div2.appendChild(dele);
    div.appendChild(p);
    div.appendChild(div2);
    container.appendChild(div);

    input.value = "";
}

butadd.onclick = add;
