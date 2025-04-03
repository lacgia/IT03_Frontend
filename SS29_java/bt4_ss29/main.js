let work={

}


function main(){
    let choice=0;
    

    do {
        choice = Number(prompt(
            "==============================\n" +
            " QUẢN LÝ CÔNG VIỆC \n" +
            "==============================\n" +
            "1. Thêm công việc\n" +
            "2. Hiển thị tất cả công việc\n" +
            "3. Cập nhật trạng thái công việc\n" +
            "4. Lọc công việc theo trạng thái\n" +
            "5. Sắp xếp công việc theo trạng thái\n" +
            "6. Thoát\n" +
            "----------------------------------\n" +
            "Nhập lựa chọn của bạn:"));


            switch(choice){


                case 1:
                    add();
                    break;

                case 2:
                    show();
                    break;

                case 3:
                    update();
                    break;

                case 4:
                    locwork();
                    break;

                case 5:
                    sort();
                    break;

                case 6:
                    alert("mái bayyy!");

                default:
                    alert("nhap gì vậy ba!!");

            }

        }while(choice!=6)

           
}

function add(){
    let id=0;
    do{
         id=parseInt(prompt("nhap vao id nguoi dung(số nguyên): "))
    }while(isNaN(id));
 
      
            let namee=prompt("nhap vao ten cong viec: ");

        let mota=prompt("nhap vao mota: ");
        let timetostart=prompt("nhap vao thoi bat dau cong viec: ");

        let trangthai="";
        do{
            trangthai=prompt("nhap vao trang thai nguoi dung (hoàn thành/ không hoàn thành): ");
        }while(trangthai!=="hoàn thành"&& trangthai!=="không hoàn thành")

          work[id]={namee, mota, timetostart, trangthai}
            alert("thêm công việc thành công nhé!!")
}

function show(){
    let output=""
    for(let id in work){
        let temp=work[id];
        output+="id: "+id+" name: "+temp.namee+" mô tả: "+temp.mota+" time to start: "+temp.timetostart+" trạng thái; "+temp.trangthai+"\n";
    }
    if(output==""){
        alert("mang rong");
    }else{
        alert(output);
    }
}

function update(){
    let idup=prompt("nhap vao id muon thay doi thong tin: ")
    if(work[id].hasOwnProperty(idup)){
          
        let namee=prompt("nhap vao ten cong viec: ");

        let mota=prompt("nhap vao mota: ");
        let timetostart=prompt("nhap vao thoi bat dau cong viec: ");
        let trangthai="";
        do{
            trangthai=prompt("nhap vao trang thai nguoi dung (hoàn thành/ không hoàn thành): ");
        }while(trangthai!=="hoàn thành"&& trangthai!=="không hoàn thành")

          work[idup]={namee, mota, timetostart, trangthai}
            alert("thêm công việc thành công nhé!!")
    }else{
        alert("id khong ton tai");
    }
}


function locwork(){
    let output="";
    let key=prompt("nhap va trang thai muôn muốn lọc(hoàn thành/ khồn hoàn thành)");
    for(let id in work){
        let temp=work[id];
        if(key==work[id].trangthai){
        output+="id: "+id+" name: "+temp.namee+" mô tả: "+temp.mota+" time to start: "+temp.timetostart+" trạng thái; "+temp.trangthai+"\n";
        }
    }
    if(output==""){
        alert("mang rong");
    }else{
        alert(output);
    }

}

main();