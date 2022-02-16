window.onload = function(){
    let x = prompt("터널의 높이를 입력하세요");
    if(x < 170){
        document.write("충돌")
    }
    else if(x == 170){
        document.write("정상통과");
    }
    else{
        document.write("무난히통과")
    }
}
