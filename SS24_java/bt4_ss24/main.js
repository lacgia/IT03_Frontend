let choice=0;
let arr=[];

do{
    choice=Number(prompt(
        "MENU-Quản lý\n\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n\n" 
    ));

    switch(choice){

        case 1:
            let n=Number(prompt("nhập vào số hàng của mảng: "));
            let m=Number(prompt("nhập vào số cột của mảng: "));

            for(let i=0;i<n;i++){
                arr[i]=[];
                for(let j=0;j<m;j++){
                    arr[i][j]=Number(prompt("nhập vào phần tử thứ "+ "arr["+i+"]["+j+"]"));
                }
            }
            break;

            case 2:
                let arr2 = arr.map(hàng => hàng.join(" ")).join("\n"); 
                alert(arr2);
                break;
            

            case 3:
                let sum=0;
                for(let i=0;i<arr.length;i++){
                    for(let j=0;j<arr[i].length;j++){
                        sum+=arr[i][j];
                    }
                }
                alert("Tổng các phần tử trong mảng là: "+sum);
                break;

            case 4:
                let max=arr[0][0];
                let index1=0;
                let index2=0;

                for(let i=0;i<arr.length;i++){
                    for(let j=0;j<arr[i].length;j++){
                        if(arr[i][j]>max){
                            max=arr[i][j];
                            index1=i;
                            index2=j;
                        }
                    }
                }

                alert("phần tử có giá trị lớn nhất là: "+max+" ,vị trí:"+ "arr["+index1+"]["+index2+"]");
                break;

            case 5:
                let sum1=0;
                let row=Number(prompt("nhập vào số hàng muốn tính tồng:"));
                if(row>arr.length || row<0){
                    alert("không hợp lệ");
                    break;
                }else{
                    for(let i=0;i<arr[row].length;i++){
                            sum1+=arr[row][i];
                    }
                    let avg=sum1/arr[row].length;
                    alert("Tổng các phần tử của hàng "+row+" là: "+sum1+", trung bình cộng là: "+avg);
                }
                break;

                case 6:
                    for(let i=0;i<arr.length;i++){
                        arr[i].reverse();
                    }
                    break;
    }
}while(choice!=7);