let arr=[];
let choice=0;
let n=0;
do{
   choice= Number(prompt(
    "================== MENU ===================\n" +
    "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
    "2. In ra giá trị các phần tử đang quản lý\n" +
    "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
    "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
    "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
    "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
    "7. Thêm một phần tử vào vị trí chỉ định\n" +
    "8. Thoát\n" +
    "============================================\n" +
    "Lựa chọn của bạn:"
));
    switch(choice){
        case 1:
            n =Number(prompt("nhap vao so phan tu: "));
            if(isNaN(n)||n<=0){
                alert("sai n nhập vào");
                break;
            }else{
                for(let i=0;i<n;i++){
                    arr[i]=prompt("nhap vao gia tri cho phan tu thu: "+(i+1));
                }
            };
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            let sum=0;
            let sochan=[];
            for(let i=0;i<arr.length;i++){
                if(arr[i]%2==0){
                    sum += Number(arr[i])
                    sochan.push(arr[i])
                }
            }

            if(sochan.length==0){
                alert("khong co so chan nao trong mang");
            }else{
                alert("cac so chan co trong mang la: "+ sochan +" tong cac so chan: "+sum)
            }
          break;


        case 4: 
            let min=arr[0];
            let max=arr[0];
            for(let i=0;i<arr.length;i++){
                if(min>arr[i]){
                    min=arr[i]
                }if(max<arr[i]){
                    max=arr[i]
                }
            }
            alert("so lon nhat = "+ max +"\n"+
                "so nho nhat = "+ min +"\n"
            )
            break;


        case 5:
            let cacsnt=[];
            let sumsnt=0;
          for(let i=0;i<arr.length;i++){
            let ys=true;
            let num=Number(arr[i]);
            if(isNaN(num)||num<2){
                ys=false;
            }else{
                for(let j=2;j<=Math.sqrt(num);j++){
                    if(num%j==0){
                        ys=false;
                        break;
                    }
                }
            }

            if(ys){
                sumsnt+=num;
                cacsnt.push(num);
            }

            
          }

          if(cacsnt.length==0){
            alert("khong co so nguyen to nao trong mang");
          }else{
            alert("cac so nguyen to co trong mang la: "+ cacsnt +" tong cac so nguyen to: "+sumsnt)
          }
          break;


          case 6:
            let num=Number(prompt("nhap vao so can tim: "))
                let count=0;
            for(let i=0;i<arr.length;i++){
                if(num==arr[i]){
                    count++;
                }
            }
            alert("so "+num+" xuat hien "+count+" lan trong mang")
            break;


        case 7:
            let vitri=Number(prompt("nhap vao vi tri muon them phan tu"));
            let giatri=Number(prompt("nhap vao gia tri muon them"));

            arr.splice(vitri, 0, giatri);
            alert("mang sau khi them phan tu: "+arr);
            break;


        case 8:
            alert("tam biet");
            break;


        break;
    }
    
}while(choice!=8)