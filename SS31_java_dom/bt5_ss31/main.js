let table=document.getElementById("tbody");

let employees=[
    { id: 1, name: "John", age: 18, address: "New York" },
    { id: 2, name: "Mike", age: 22, address: "Canada" },
    { id: 3, name: "Linda", age: 19, address: "California" },
    { id: 4, name: "Peter", age: 25, address: "London" },
    { id: 5, name: "Tony", age: 17, address: "New York" }
];

for(let i=0;i<employees.length;i++){
    let row=
    "<tr>"+
        "<td>"+employees[i].id+"</td>"+
        "<td>"+employees[i].name+"</td>"+
        "<td>"+employees[i].age+"</td>"+
        "<td>"+employees[i].address+"</td>"+
    "</tr>"
    table.innerHTML+=row
}