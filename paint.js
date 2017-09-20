/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/7/15.
 */
var canvas = document.querySelector("#canvas");
var save=document.querySelector(".save");
var clear=document.querySelector(".clear");
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
canvas.width = clientWidth;
canvas.height = clientHeight;

context = canvas.getContext("2d");
context.strokeStyle = "#f00";
context.fillStyle = "#ff0";

var previousPosition = {};

canvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    var type=document.querySelector("input[name='type']:checked").value;

    var position = e.touches[0];
    var clientX = position.clientX;
    var clientY = position.clientY;

    if(type==="pen"){
        if (previousPosition) {
            context.beginPath();
            context.moveTo(previousPosition.clientX, previousPosition.clientY);
            context.lineTo(clientX, clientY);
            context.stroke();
        }
    }else if(type="eraser"){
        context.clearRect(clientX-20,clientY-20,40,40);
    }
    //给上一个点赋值
    previousPosition.clientX = clientX;
    previousPosition.clientY = clientY;
})
canvas.addEventListener("touchend",function () {
    previousPosition={};
})
clear.onclick=function(){
    context.clearRect(0,0,clientWidth,clientHeight);
}
save.onclick=function(){
    var data=canvas.toDataURL("image/png");
    var newWindow=window.open('about:blank','image from canvas');
    newWindow.document.write("<img src='"+data+"' alt='from canvas'/>");
}


