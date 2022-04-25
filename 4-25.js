// var too = 1;
// switch(too){
//     case 1:
//         console.log("true");
//         break;
//     case 0:
//         console.log("false");
//         break;
//     default:
//         console.log("0 eswel 1 oruul");
// }

// var dun = 1;
// switch(parseInt(dun/10)){
//     case 10:
//         console.log("A");
//         break;
//     case 9:
//         console.log("A");
//     case 8:
//         console.log("B");
//     case 7:
//         console.log("C");
//     case 6:
//         console.log("D");
//     default:
//         console.log("F");
// }

// document.getElementById("test").innerHTML = "Hello World";
// function dar(){
//     obj.innerHTML = 'red';
//     obj.style.background = 'black';
// }
// function mOut(obj){
//     obj.innerHTML = 'more';
//     obj.style.background = 'red';
// }
// function mOver(obj){
//     obj.innerHTML = 'hello world';
// }

// var date = new Date();
// var y = date.getFullYear();
// var m = date.getMonth()+1;
// var d = date.getDate();
// document.getElementById("test").innerHTML = y+":"+m+":"+d;


function showtime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var q = "AM";

    if (h>12){
        h=h-12;
        q="PM";
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    // if(h<10)h="0"+h;
    // else h=h;

    document.getElementById("test").innerHTML = h+":"+m+":"+s+q; 
    
    setTimeout(showtime, 1000);
}
showtime();

