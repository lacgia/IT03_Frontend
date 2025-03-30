let choice=0;
let arr=[];

do{
    choice =Number(prompt(
        "MENU - Quản lý mảng số nguyên\n\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai\n" +
        "7. Thoát chương trình\n\n" +
        "Nhập lựa chọn của bạn (1-7):"
    ));

    switch(choice){
        case 1:
            let n = Number(prompt("Nhập số phần tử mảng: "));
            for(let i=0; i<n; i++){
                arr[i] = Number(prompt("Nhập phần tử thứ " + (i+1) + ": "));
            }
            break;

        case 2:
            alert(arr);
            break;

        case 3:
            let chan =[];
            let le=[];
            for(let i=0;i<arr.length; i++){
                if(arr[i]% 2==0){
                    chan.push(arr[i]);
                }else{
                    le.push(arr[i]);
                }
            }
            alert("Các phần tử chẵn: "+chan+"\nCác phần tử lẻ: " +le);
            break;

        case 4:
            let sum=0;
            for(let i=0;i<arr.length;i++){
                sum+=arr[i];
            }
            let avg =sum/arr.length;
            alert("Trung bình cộng của mảng là: "+avg);
            break;

        case 5:
            let pos=Number(prompt("Nhập vị trí cần xóa: "));
            if(pos<0||pos>=arr.length){
                alert("Vị trí không hợp lệ");
            }else{
                arr.splice(pos,1);
                alert("xoa thanh cong");
                alert(arr);
            }
            break;

        case 6:
            let max1=[0];
            let max2=[0];
            for(let i=0;i<arr.length;i++){
                if(arr[i]>max1){
                    max2=max1;
                    max1=arr[i];
                }else if(arr[i]>max2&& arr[i]<max1){
                    max2=arr[i];
                }
            }
            alert("Phần tử lớn thứ hai trong mảng là: "+max2);
            break;

        case 7:
            alert("Thoát chương trình");
            break;
    }
}while(choice!=7);


