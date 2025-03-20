let choice=0;
do{
    alert("-------- MENU -------\n" +
        "1. Chức năng 1\n" +
        "2. Chức năng 2\n" +
        "3. Chức năng 3\n" +
        "4. Chức năng 4\n" +
        "5. Thoát");
    choice=parseInt(prompt("lua chon cua ban la:"));
    switch(choice){
        case 1:
            alert("helooo");
            break;
        case 2:
            alert("bry");
        default:
            alert("nhap sai r")
    }
    
}while(choice!==5)