let arr=[];
let choice=0;

do{
    choice=Number(prompt(   "MENU\n\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng của một hàng hoặc một cột\n" +
        "7. Thoát chương trình\n\n"))


        switch(choice){

            case 1:
                let rows=Number(prompt("nhập vào số hàng của mảng"));
                let cols=Number(prompt("nhập vào số cột của mảng"));
                arr=[];
                for(let i=0;i<rows;i++){
                    arr[i]=[];
                    for(let j=0;j<cols;j++){
                        arr[i][j]=Number(prompt("nhập vào phần tử thứ "+ "arr["+i+"]["+j+"]"));
                    }
                }
                break;

            case 2:
                let arr2=arr.map(hàng=>hàng.join(" ")).join("\n");
                alert(arr2);
                break;

            case 3:
                let sum=0;
                for(let i=0;i<arr.length;i++){
                    for(let j=0;j<arr[i].length;j++){
                        sum+=arr[i][j];
                    }
                }

                alert("tổng các phần tử trong mảng là: "+sum);
                break;

            case 4:
                let sum1=0;
                for(let i=0;i<arr.length;i++){
                    sum1+=arr[i][i];
                }
                alert("tổng đường chéo chính là: "+sum1);
                break;


            case 5:
                let sum2=0;
                for(let i=0;i<arr.length;i++){
                    sum2+=arr[i][arr.length-1-ii]
                }

                alert("tổng đường chéo phụ là: "+sum2);


            case 6:
                let rows3=Number(prompt("nhập vào hàng cần tính trung bình cộng"));

                if(rows3>arr.length|| rows3<0){
                    alert("không hợp lệ");
                
                }else{
                    let sum4=0;
                    for(let i=0;i<arr[rows3].length;i++){
                        sum4+=arr[rows3][i];
                    }
                    let avg=sum4/arr[rows3].length;
                    alert("tổng các phần tử của hàng   "+rows3+"là "+sum4+",trung bình cộng là: "+avg);
                }

                break;



            case 7:
                alert("bye bye!!");
                break;

        }
}while(choice!=7);