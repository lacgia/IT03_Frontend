let choice=0;
let arr=[];

do{
    choice=Number(prompt(
        "MENU - Quản lý mảng số nguyên\n\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình\n\n"
    ));

    switch(choice){
        case 1:
            let n=Number(prompt("nhap vao so phan tu: "));
            for(let i=0;i<n;i++){
                let num=Number(prompt("nhap vao gia tri cho phan tu thu: "+(i+1)));
                if(isNaN(num)||num<0 || num==""){
                    alert("sai so nhap vao");
                    i--
                }else{
                    arr.push(num);
                }
            }
            break;


        case 2:
            alert(arr);
            break;


        case 3:
            let max=arr[0];
            let index=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]>max){
                    max=arr[i];
                    index=i;
                }
            }
            alert("Phần tử lớn nhất là: "+max+" ở vị trí: "+index);
            break;


        case 4:
            let sum=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]>0){
                    sum+=arr[i];
                }
            }
            let avg=sum/arr.length;
            alert("Tổng các số dương: "+sum+" Trung bình cộng các số dương: "+avg);
            break;

        case 5:
            let arr2=[];
            for(let i=arr.length-1;i>=0;i--){
                arr2.push(arr[i]);
            }
            alert(arr2);
            break;

        case 6:
            let check=true;
            for(let i=0;i<arr.length/2;i++){
                if(arr[i]!=arr[arr.length-1-i])
                    check=false;
            }
            if(check){
                alert("Mảng đối xứng");
            }else{
                alert("Mảng không đối xứng");
            }
            break;

        case 7:
            alert("Thoát chương trình");
            break;

    }
}while(choice!=7);