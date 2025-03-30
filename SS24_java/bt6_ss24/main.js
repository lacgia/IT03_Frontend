let choice=0;
let str="";
 do{
    choice=Number(prompt( "MENU\n\n" +
      "1. Nhập chuỗi\n" +
      "2. Hiển thị chuỗi\n" +
      "3. Tính độ dài của chuỗi\n" +
      "4. Đếm số lần xuất hiện của một ký tự\n" +
      "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n" +
      "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n" +
      "7. Thoát chương trình\n\n"))

      switch(choice){

         case 1:
            str=prompt("nhập vào chuổi bất kì: ");
            break;

         case 2:
            alert("chuỗi vừa nhập là: "+str);
            break;

         case 3:
            alert("độ dài của chủi là: "+str.length);
            break;

         case 4:
            let n=prompt("nhập vào kí tự cần kiểm tra: ");
            let count=0;
            for(let i=0;i<str.length;i++){
               if(n==str[i]){
                  count++;
               }
            }
            alert("số lần xuất hiện của kí tự "+n+" là "+count);
            break;


          case 5:
            let check=true;
            for(let i=0;i<str.length/2;i++){
               if(str[i]!=str[str.length-1-i]){
                  check=false;
               }
            }

            if(check){
               alert(str+" là chuỗi đối xứng");
            }else{
               alert(str+" không phải là chuỗi đối xứng");
            }
            
            break;


            case 6:
               let newarr="";
               let checkk=true;
               for(let i=0;i<str.length;i++){
                  let char=str[i];
                  if(checkk && char>='a' && char <='z'){
                     newarr+=char.toUpperCase();
                  }else{
                     newarr+=char;
                  }
                  checkk=(char==" ");
               }

               str=newarr;
               alert("chuỗi sau khi chuyển đổi là: "+str);
               break;

            case 7:
               alert("mái bái!");
               break;

      }

 }while(choice!=7);


