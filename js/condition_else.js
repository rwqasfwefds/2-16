let date=new Date();
let hours=date.getHours();

if(hours<12){
    alert('오전입니다.');
}
else{
    alert('오후입니다.');
}