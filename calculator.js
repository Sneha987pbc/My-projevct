
let values=document.getElementById("screen");
// function cancel(){
//     values.value=
// }

function Percentage(){
    values.value+="%";
}
function cut(){
    values.value=" ";
}
function Divide(){
    values.value+="/";
}
function seven(){
    values.value+=7;
}
function eight(){
    values.value+=8;
}
function nine(){
    values.value+=9;
}
function multi(){
    values.value+="*";
}
function four(){
    values.value+=4;
}
function five(){
    values.value+=5;
}
function six(){
    values.value+=6;
}
function diff(){
    values.value+="-";
}
function one(){
    values.value+=1;
}
function two(){
    values.value+=2;
}
function three(){
    values.value+=3;
}
function add(){
    values.value+="+";

}
function zero(){
    values.value+=0;
}
function clea(){
   let c="00";
   values.value=c;
}
function equal(){
    let x=   values.value;
    values.value=eval(x);
}
function decimal(){
    values.value+=".";
}
function cancel(){
    let x=values.value;
   let y= x.slice(0,-1);
    values.value=y;
}