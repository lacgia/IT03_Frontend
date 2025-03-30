let choice=0;
let n1=Number(prompt("nhap vao so 1"))
let n2=Number(prompt("nhap vao so 2"))

do{
    choice=parseInt(prompt("-MENU-"+ "\n \n"+
        "1. cộng hai số" +'\n'+
        "2. cộng hai số" +'\n'+
        "3. cộng hai số" +'\n'+
        "4. cộng hai số" +'\n'+
        "5. thoát" +'\n'
    ))

    switch(choice){
        case 1:
            let num=n1+n2;
            alert("tong hai so: "+num);
         break;

        case 2:
            let hieu=n1-n2;
            alert("hieu 2 so la: "+hieu);
            break;

        case 3:
            let nhan=n1*n2;
            alert("nhan 2 so la: "+nhan);
            break;

        case 4:
            let chia=n1/n2;
            alert("chia 2 so: "+chia.toFixed(2))
    }

}while(choice!=5)