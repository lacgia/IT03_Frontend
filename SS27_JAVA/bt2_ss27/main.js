let arr=[];
let n=0
do{
    choice = Number(prompt(
        "MENU QUẢN LÝ SINH VIÊN\n" +
        "1. Nhập danh sách sinh viên\n" +
        "2. Hiển thị danh sách sinh viên\n" +
        "3. Tìm sinh viên theo tên\n" +
        "4. Xóa sinh viên khỏi danh sách\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn của bạn:"
    ));

    switch(choice){
        case 1:
            n=parseInt(prompt("nhap so lg sinh vien muon them: "));
            if(n<0 || isNaN(n)){
                alert("sai!")
                break;
            }else{
                for(let i=0;i<n;i++){
                    let ten=prompt("nhap vao ten sinh vien thu: "+(i+1))
                    if(!isNaN(ten) || ten.length<0){
                        alert("nhap ten sai");
                        i--
                    }else{
                        arr.push(ten);
                    }
                }
            }
            break;


        case 2:
            alert("danh sach sinh vien"+"\n"+arr.join("\n"));
            break;



        case 3:
            let find=prompt("nhap vao ten sinh vien muon tim: ");
            let key=[];
            if(!isNaN(find)|| find.length<=0){
                alert("loi");
            }else{
                for(let i=0;i<arr.length;i++){
                    if(arr[i].toLocaleLowerCase().includes(find.toLocaleLowerCase())){
                        key.push(arr[i]);
                    }
                }
                if(key.length==0){
                    alert("khong co thang nao trong danh sach");
                }else{
                    alert("tim thay cac thang: "+"\n"+ key.join("\n"));
                }
            }
            break;

            case 4:
                let dele=prompt("nhap vao ten muon xoa");
                if(!isNaN(dele)|| dele.length<=0){
                    alert("loi");
                }else{
                    let index=arr.findIndex(name=>name.toLocaleLowerCase()==dele.toLocaleLowerCase());
                    if(index!==-1){
                        arr.splice(index,1);
                        alert("đã xóa sinh viên:");
                    }else{
                        alert("làm gì có thằng đó trong mảng :vvv");
                    }
                }
                break;

                
            case 5: 
             alert("mái bai!");
             break;
    }

}while(choice!=5)