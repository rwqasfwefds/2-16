window.onload = function(){
    let x = prompt("숫자를 입력하세요");
    if(x % 2 != 0 ){
        document.write("odd")
    }
    else{
        document.write("even")
    }
}