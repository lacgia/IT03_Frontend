let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mịt", price: 80000, quantity: 21, category: "món ăn dân tộc Mông" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Nùng" },
    { id: 4, name: "bánh đậu xanh", price: 50000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let gio=[];

function main(){
    let choice=0;
    do {
        choice = Number(prompt(
            "=============================\n" +
            " MENU QUẢN LÝ NHÀ HÀNG \n" +
            "=============================\n" +
            "1. Xem danh sách sản phẩm\n" +
            "2. Chọn sản phẩm để mua\n" +
            "3. Sắp xếp sản phẩm theo giá\n" +
            "4. Tính tổng tiền giỏ hàng\n" +
            "5. xem gio hang\n"+
            "6. thoát\n" +
           
            "-----------------------------\n" +
            "Nhập lựa chọn của bạn:"
        ));

        switch(choice){
            case 1:
                showproduct();
                break;

            case 2:
                chouse();
                break;

            case 3:
                sortpro();
                break;

            case 4:
                tongmoney();
                break;

            case 5:
                showgio();
                break;

            case 6:
                alert("mái bai")
                return;

            default:
                alert("nhap gi vậy")
        }
}while(choice!=6)
}


function showproduct(){
    let prolist="";
    products.forEach(product=>{
        prolist+="   id: "+product.id +"   name: "+product.name +"   price; "+product.price +"   quantity: "+product.quantity+ "   category: "+product.category+"\n"
    })
    alert(prolist);
}


function chouse(){
    let id=Number(prompt("nhập vào id bạn muốn mua sản phẩm"));
    let amount=Number(prompt("nhập vào số lượng sản phẩm bạn muốn mua"));

    let product=products.find(p=>p.id===id);
    if(!product){
        alert("sản phẩm không tồn tại nhé!")
        return;
    }

    if(product.quantity<amount){
        alert("không đủ số lg sản phẩm: ");
        return ;
    }

    let gioitem=gio.find(item=>item.id===id)

    if(gioitem){
        gioitem.quantity+=amount
    }else{
        gio.push({id: product.id, name: product.name, price: product.price, amount })
    }
    product.quantity-=amount;
    alert("đã thêm "+product.name+"vào gio hang");
}

function showgio(){
    let showgioo=""
gio.forEach(item=>{
    showgioo+="   id: "+item.id +"   name: "+item.name +"   price; "+item.price +"   quantity: "+item.amount+"\n"
})
alert(showgioo);
}

function sortpro(){
    let key=Number(prompt("nhap  vao 1 de sap xep tang dan va nhap vao 0 de sap xep giam dan"));
    if(key ==1){
        products.sort((a,b)=>a.price-b.price);
    }else if(key==0){
        products.sort((a,b)=>b.price-a.price);
    }else{
        alert("nhap vao sai")
        return;
    }

    let sortafter="";
    products.forEach(item=>{
        sortafter+="   id: "+item.id +"   name: "+item.name +"   price; "+item.price +"   quantity: "+item.quantity+ "   category: "+item.category+"\n"
    })
    alert(sortafter);
}

function tongmoney(){
    let tong=0;
    gio.forEach(item=>{
        tong+=(item.amount*item.price);
    })

    alert("tong gia la: "+tong);

}











main();