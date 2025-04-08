let list=[
    {id:1,
    name:"nguyễn văn A",
        pos:"developer"
    },
    {id:2,
        name:"trần thị B",
            pos:"designer"
        },
        {id:3,
            name:"Phạm văn C",
                pos:"project manager"
            },
        ]

let tbody=document.getElementById("tbody");

for(let i=0;i<list.length;i++){
    let row="<tr>"+
        "<td>"+list[i].id+"</td>"+
        "<td>"+list[i].name+"</td>"+
        "<td>"+list[i].pos+"</td>"+
    "</tr>"
tbody.innerHTML+=row;
}


    