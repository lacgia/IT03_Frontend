


let user={
    namecty:"gia lac",
    maid:{
        
    }
}



function menu(){
    let choice=0;
    let arr=[]
    do{
            choice = Number(prompt(
                "MENU QUẢN LÝ NHÂN VIÊN:\n" +
                "1. Thêm nhân viên mới\n" +
                "2. Xóa nhân viên theo ID\n" +
                "3. Cập nhật lương nhân viên\n" +
                "4. Tìm kiếm nhân viên theo tên\n" +
                "5. Thoát\n" +
                "Nhập lựa chọn của bạn:"
            ));
            switch(choice){
                case 1:
                    addsv();
                    break;

                case 2:
                    deleus();
                    break;

                case 3:
                    moneyupd();
                    break;

                case 4:
                    shearchname();
                    break;

                case 5:
                    alert("mái bai!!")
                    break;
            }

    }while(choice!=5)
}

function addsv(){
   
        let namee=prompt("nhap vao ten nguoi dung: ");
        let id=parseInt(prompt("nhap vao id nguoi dung: "));
        let pos=prompt("nhap vao vi tri cua ng dung");
        let luong = parseInt(prompt("nhap vao luong "));
        if((namee==null|| id==null|| pos==null||luong==null) || (isNaN(id) && isNaN(luong))  ){
            return;
        }

        if(user.maid[id]){
            alert("trung id co san");
            return 
        }

        user.maid[id]={namee,pos,luong}
        alert("thanh cong");
        showsv();
}

function deleus(){
    let iddele=Number(prompt("nhap vao id muon xoa: "));
    if(isNaN(iddele)){
        alert("loi!");
        return ;
    }
    if(user.maid[iddele]){

        delete user.maid[iddele]
        alert("nhan vien"+iddele+ "bi xa thai")
        showsv();

    }else{
        alert("id khong ton tai")
        return 
    }
}




function showsv(){
    let out="danh sach nhan vien: \n"
    for(let id in user.maid){
        let  nv=user.maid[id];
           out +="id: "+id+ " name: "+nv.namee+"pos:  "+nv.pos+" salary: "+nv.luong +"\n"}
        alert(out);
}



function moneyupd(){
    let keyyy=Number(prompt("nhap vao idd nhan vien muon cap nhat luong: "));
    if(isNaN(keyyy)){
        alert("sai so!")
        return;
    }else{
      if(user.maid[keyyy]){
        let newsalary=Number(prompt("nhap vao luong moi cho nhan vien thu: "+keyyy))
        user.maid[keyyy].luong=newsalary;
        alert("cap nhat luong thanh cong: ")
        showsv();
      }else{
        alert("nhan vien khong ton tai");
        return ;
      }
    }
}


function shearchname(){
    let tempname=prompt("nhap vao ten nhan vien muon tim kiem");
   for(let id in user.maid){
    if(user.maid[id].namee.toLowerCase().includes(tempname.toLocaleLowerCase())){
       alert("ten :"+   user.maid[id].namee+" pos: "+user.maid[id].luong+" luong: "+user.maid[id].luong);
      return ;
    }
   }
   alert("khong tim thay nhan vien")
}



menu();
