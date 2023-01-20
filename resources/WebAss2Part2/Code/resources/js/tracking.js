var clickNo = 0;
var charNo = 0;
var charUser = 0;
var charPass = 0;
var mins = 3;
var start = 0;
var stringArray = [];
var values = 0;
//var user = 0;

function onClick(){
    clickNo++;
    document.getElementById("clickVar").innerHTML = clickNo;
}

function countChar(){
    charNo++;
    document.getElementById("keyNo").innerHTML = charNo;
}

function appearAndStop(){
    document.getElementById("stats").style.display = "block";
    var end = new Date();
    //var start = timer;
    var mili =  end - start;
    var sec = parseInt(mili /1000);
    var mins = parseInt(sec/60);
    var secs = sec % 60;
    //mins = start;
    //console.log(start);
    document.getElementById("time").innerHTML = mins + " minutes and " + secs + " seconds" ;
    strings();
    console.log(mins);
    console.log(clickNo);
    document.getElementById("chars").innerHTML = values;
}

function strings(){
    values = stringArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    //const userN = document.getElementsByTagName("input");
    //userN.forEach((item) => console.log(item));
    //var user = userN.filter(x =>(x.type == "text"));//.map(x => x.value.length).reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(values);
}

function addToArray(a){
    var val = a.value.trim().length;
    stringArray.push(val);
}

document.addEventListener('DOMContentLoaded',function() {
    timer()}, false)
let timer = function(){
    start = new Date();
    
}

