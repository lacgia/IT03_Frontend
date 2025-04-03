let danhba={

};

function main(){
    let choice=0;
    do{ 
        choice=Number(prompt( "MENU QUẢN LÝ DANH BẠ:\n" +
            "1. Thêm liên hệ mới\n" +
            "2. Hiển thị danh bạ\n" +
            "3. Tìm kiếm theo số điện thoại\n" +
            "4. Cập nhật thông tin theo ID\n" +
            "5. Xóa liên hệ theo ID\n" +
            "6. Thoát\n" +
            "Nhập lựa chọn của bạn:"))

            switch(choice){

                case 1:
                    add();
                    break;

                    case 2:
                    show();
                    break;

                case 3:
                    shearchname();
                    break;

                case 4:
                    upded();
                    break;

                case 5:
                    dele();
                    break;

                case 6:
                    alert("mauis bayyy!!!");

            }

    }while(choice!=6)
}

function add(){
    let id=0;
    do{
         id=parseInt(prompt("nhap vao id nguoi dung(số nguyên): "))
    }while(isNaN(id));
   let namee=""
        do{
            namee=prompt("nhap vao ten nguoi: ");

            }while(!isNaN(namee))    
                
                let email="";
    do{
        email=prompt("nhap vao email: ");
    }while(     (!email.includes("@")) && (!email.endsWith(".com")|| !email.endsWith(".vn")) )

        let numberphone=0
        do{
             numberphone=parseInt(prompt("nhap vao sdt nguoi dung: "));
        }while(isNaN(numberphone))   

          danhba[id]={namee, email, numberphone}
            alert("thêm liên hệ thành công nhé!!")
  

    

}





function show(){
    let output=""
    for(let id in danhba){
        let temp=danhba[id]
        output+=("id: "+id+" namee: "+danhba[id].namee+" email: "+danhba[id].email+" phone: "+danhba[id].numberphone+ "\n");
    }
    alert("danh sách: "+output);
}


function shearchname(){
    let keyshearch=parseInt(prompt(" nhap vao nguoi dung muon tim thong qua sdt: "));
    if(isNaN(keyshearch)){
        alert("sai sdt")
        return ;
    }else{
        for(let id in danhba){
            if(keyshearch===danhba[id].numberphone){
                let temp=danhba[id]
                alert("id: "+id+" namee: "+danhba[id].namee+" email: "+danhba[id].email+" phone: "+danhba[id].numberphone+ "\n")
                return;
            }
        }
        alert("khong co nguoi nao!");
    }
}

function upded(){
    let keyid=parseInt(prompt("nhap vao id ban muon sua thong tin: "));
    if(isNaN(keyid)){
        alert("sai id");
        return;
    }else{
       
            if(danhba.hasOwnProperty(keyid)){
               let namee=""
                    do{
                        namee=prompt("nhap vao ten nguoi: ");
            
                        }while(!isNaN(namee))    
                            
                            let email="";
                do{
                    email=prompt("nhap vao email: ");
                }while(!email.includes("@") && (!email.endsWith(".com")|| !email.endsWith(".vn")) )
            
                    let numberphone=0
                    do{
                         numberphone=parseInt(prompt("nhap vao sdt nguoi dung: "));
                    }while(isNaN(numberphone))   
            
                      danhba[keyid]={namee, email, numberphone}
                        alert("cap nhat liên hệ thành công nhé!!")
                        return;

            }else{
                alert("danh ba lam gi co id ddos");
            } 
    }
}

function dele(){
    let removed=parseInt(prompt("nhap vai id muon xoa: "));
    if(isNaN(removed) || !danhba.hasOwnProperty(removed)){
        alert("saoi");
        return;
    }
    delete danhba[removed];
    alert("xoa thanh cong");
}

main();
