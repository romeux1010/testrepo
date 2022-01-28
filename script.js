/* a function that makes the <span id="rate_val"> updates as the slider moves.*/
function updateRate(){

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

   
/*the function that computes the interest*/

function compute(){
    var p = document.getElementById("principal").value;
    /*an if-else statement that holds whether the input in the "principal"
    is a positive number or not. If not,an alert box will prompt. 
    After clicking ok, it will refocus on the principal input box*/  
    if (p<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();

    }
    else{

    var r = document.getElementById("rate").value;
     
    var y = document.getElementById("years").value;

    var interest = p * y * r / 100;
    /*the year now is already started in 2022. Not 2020.*/
    var year = new Date().getFullYear()+parseInt(y);
    /*here is the output after clicking the button,(compute interest).*/
    var result = document.getElementById("result");
    result.innerHTML= " If you deposit <span style='background-color:#FFFF00'>"+ p +"</span>"+"," +"</br>"+
    "at an interest rate of <span style='background-color:#FFFF00'>"+r +"</span>%."+"</br>"
    + "You will receive an amount of" + " <span style='background-color:#FFFF00'>"+ interest +"</span>"+ "</br>"+
    "in the year <span style='background-color:#FFFF00'>"+ year+ "</span>.";
}
}
 
