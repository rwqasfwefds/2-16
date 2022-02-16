function changeText(){
    let x=10,y=20
    if(x==y){
        let str=document.getElementById("text");
        str.innerHTML="1";
    }
    else if(x<y){
        let str=document.getElementById("text");
        str.innerHTML="2";
    }
    else{
        let str=document.getElementById("text");
        str.innerHTML="3";
    }
}
