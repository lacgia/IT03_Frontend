let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@d  omain.net", "space@out.com"];

function check(arr) {
    return arr.filter(e => e.includes("@") && !e.includes(" ")); 
}

console.log(check(arr));
