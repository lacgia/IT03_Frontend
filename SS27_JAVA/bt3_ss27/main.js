let choice=0;

do{
    
        choice = Number(prompt(
            "Chọn chức năng:\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát"
        ));

        switch(choice){
            case 1:
                S();
                break;

            case 2:
                cv();
                break;

            case 3:
                scn();
                break;

            case 4:
                cvhcn();
                break;

            case 5:
            alert("mais bai!");
            break;

        }
}while(choice!=5)



    function S(){
        let bk=Number(prompt("nhap vao bk"));
        if(isNaN(bk)|| bk<0){
            alert("loi");
        }else{
            alert(" dien tich hinh tron la: "+(bk*bk*Math.PI).toFixed(2));
        }
    }

    function cv(){
        bk=parseFloat(prompt("nhap vao ban kinh hinht tron: "));
        if(!isNaN(bk) && bk>0){
            alert(" chu vi hih gtron la: "+ (2*bk*Math.PI).toFixed(2));
        }
    }

    function scn(){
        let dai=parseFloat(prompt("nhap vao chieu dai"));
        let rong=parseFloat(prompt("nhap vao chieu rong"));
        if(isNaN(dai) ||isNaN(rong)|| dai<= 0|| rong<= 0){
            alert("loi");
        }else{
            alert("dien tich hinh cn la: "+(dai *rong).toFixed(2));
        }
    }

    function cvhcn(){
        let dai=parseFloat(prompt("nhap vao chieu dai"));
        let rong=parseFloat(prompt("nhap vao chieu rong"));
        if(isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0){
            alert("loi");
        }else{
            alert("dien tich hinh cn la: "+(2*(dai +rong)).toFixed(2));
        }
    
    }