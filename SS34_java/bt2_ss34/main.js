const courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th`',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    },
];


let editIndex = null;
let tbody = document.getElementById("tbody");

function showList() {

    let html = "";
    courses.forEach((item, index) => {
        html +=
            `
        <tr>
            <td>${index + 1}</td>
            <td>${item.content}</td>
            <td>${item.dueDate}</td>
            <td>${item.status}</td>
            <td>${item.assignedTo}</td>
            <td class="text-content">
                <button onclick="edit(${index})" class="btn btn-primary mx-1">sửa</button>
                <button onclick="remove(${index})" class="btn btn-danger mx-1">xóa</button>
            </td>
        
        </tr>
        `
    })
    tbody.innerHTML = html;
    saveToLocal();
}


function add() {
    const input_Content = document.getElementById("input-Content").value.trim();
    const input_Date = document.getElementById("input-Date").value.trim();
    const input_Select = document.getElementById("input-Select").value.trim();
    const input_Name = document.getElementById("input-Name").value.trim();

    if (!input_Content || !input_Date || !input_Select || !input_Name) {
        alert("không được để trống");
        return;
    }

    const newcourses = {id:courses.length ?courses[courses.length-1].id:1+1 , content: input_Content, dueDate: input_Date, status: input_Select, assignedTo: input_Name };

    if (editIndex == null) {
        courses.push(newcourses);
    } else {
        courses[editIndex] = newcourses;
        editIndex = null;
    }



    saveToLocal();
    showList();
    document.getElementById("input-Content").value = "";
    document.getElementById("input-Date").value = "";
    document.getElementById("input-Select").value = "";
    document.getElementById("input-Name").value = "";

}



function remove(index) {
    if (confirm("vui long xac nhan co xoa khong")) {
        courses.splice(index, 1);
        showList();
    }
}

function saveToLocal() {
    localStorage.setItem("courses", JSON.stringify(courses));
}

function edit(index) {
    const task = courses[index];
    document.getElementById("input-Content").value = task.content;
    document.getElementById("input-Date").value = task.dueDate;
    document.getElementById("input-Select").value = task.status;
    document.getElementById("input-Name").value = task.assignedTo;

    editIndex = index;
    showList();
}



showList();





