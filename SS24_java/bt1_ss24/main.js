let choice=0;
let arr=[];

do{
   choice=Number(prompt(  "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"))
    switch(choice){

        case 1:
            let n=Number(prompt("nhap vao so lg pt cua mang: "));
            for(let i=0;i<n;i++){
                let num=Number(prompt("nhap vao phan tu thu "+(i+1)));
                arr.push(num);
            }
            break;

        case 2:
            alert("Mang vua nhap la: "+arr);
            break;

        case 3:
            let chan=[];
            let le=[];
            for(let i=0;i<arr.length;i++){
                if(arr[i]%2==0){
                    chan.push(arr[i]);
                }else{
                    le.push(arr[i]);
                }
            }
            alert("Cac phan tu chan trong mang la: "+chan);
            alert("Cac phan tu le trong mang la: "+le);
            break;

        case 4:
            let sum=0;
            for(let i=0;i<arr.length;i++){
                sum+=arr[i];
            }
            let tbc=sum/arr.length;
            alert("Trung binh cong cua mang la: "+tbc);
            break;

        case 5:
            let vitri=Number(prompt("nhap vao vi tri can xoa"));
            if(isNaN(vitri)|| vitri<0){
                alert("nhap sai vi tri");
            }else{
                arr.splice(vitri,1);
            }

            alert("Mang sau khi xoa la: "+arr);
            break;


        case 6:
            let max1=arr[0];
            let max2=arr[0];

            for(let i=0;i<arr.length;i++){
                if(arr[i]>max1){
                    max2=max1;
                    max1=arr[i];
                }else if(arr[i]>max2 && arr[i]<max1){
                    max2=arr[i];
                }
            }

            alert("Phan tu lon thu 2 trong mang la: "+max2);
            break;

        case 7:
            alert("mái bai!!!");
            break;
        default:
            alert("nhap cái j vậy ba!!");
    }
}while(choice!=7);