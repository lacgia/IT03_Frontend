let choice=0;
let arr=[];
let n=0;

do{
    choice = Number(
        prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát"
        )
    );
    switch(choice){
        case 1:
            nhap();
            alert(arr)
            break;

        case 2:
            avg();
            break;

        case 3:
            max();
            break;
        
        case 4:
                min();
                break;


        case 5:
            alert("mái bai");
        
        }


}while(choice!=5)

    function nhap(){
        arr=[];
        n=parseInt(prompt("nhap vao so lg so nguyen muon nhap: "));
        for(let i=0; i<n;i++){
            let num=parseInt(prompt("nhap vao so nguyen thu "+(i+1)+" :"));
            if(isNaN(num)){
                alert("loi num!!");
                i--;
            }else{
                arr.push(num);
            }
        }
    }

    function avg(){
        let temp= arr.reduce((sum, num)=> sum+num,0);
        alert("trung binh cong: "+((temp/arr.length).toFixed(2)));
    }

    function max(){
        if(arr.length==0){
            alert("loi");
        }else{
            let arr1=arr.filter(num=>num%2==0);
            let maxvl=Math.max(...arr);
            alert("so lon nhat trong mang la: "+maxvl);
        }
    }

    function min(){
        if(arr.length==0){
            alert("loi");
        }else{
            let arr1=arr.filter(num=>num%2!==0);
            let minvl=Math.min(...arr);
            alert("so nho nhat trong mang la: "+minvl);
        }
    }