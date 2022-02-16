window.onload=function(){
    let str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!";
}

function changeText(){
    
    let x=10, y=20;

    if(x==y) {
        let str=document.getElementById("text");
        str.innerHTML="x와 y는 같습니다.";
    }

    if(x<y) {
        let str=document.getElementById("text");
        str.innerHTML="x는 y보다 작습니다.";
    }

    if(x>y) {
        let str=document.getElementById("text");
        str.innerHTML="x는 y보다 큽니다.";
    }
}