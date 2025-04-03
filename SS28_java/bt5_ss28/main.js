const company={
    name:"rikieisort",
    location:"ha noi",
    employees:[
        {name: "nguyễn văn luận", position:"develop"},
        {name: "nguyễn văn hoàng", position:"tester"},
        {name: "hoàng nam cao", position:"manager"},
    ]
}


console.log(company.name+"\n"
);
 company.employees.forEach( so => {
    console.log(so.name +"--"+so.position)
})
