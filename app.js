

var questionArray=[
    {   id:"1",
        questions: "Q1.Which one is correct team name in NBA?",
        options: [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        answer: "Huston Rocket"
},
{
    id:"2",
    questions: "Q2.5 + 7 = ?",
                options: [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                answer: "12"
    },
    {
        id:"3",
        questions: "Q3.12 - 8 = ?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                answer: "4"
    }

]


// console.log(questionArray)

//timer
var second=0,mint=0;
var interval;
function timer(){
    second++
   console.log(second)
   document.getElementById("second").innerHTML=checkSecond(second)
    if(second>=60){
        mint++;
        second=0
        console.log("mintues"+mint)
        
        document.getElementById("min").innerHTML=checkMin(mint)
    }

}
interval =setInterval(timer,1000);

setTimeout(function(){
    clearInterval(interval)
    second=mint=00
},120000)

function checkSecond(e)
{
    if(e<10)
    return "0"+e
    if(e>=10)
    return e
}
function checkMin(e)
{
    if(e<10)
        return "0"+e
}

//question show
function showQuestion(num){
    var count=questionArray.length;
    if(num<count){
    //question Element Get
    var question =document.getElementById("questionElement");
    question.innerHTML=questionArray[num].questions;

    var options=document.getElementsByClassName("optionElement")
// console.log(options)
    for (var i=0 ; i< options.length;i++){
        options[i].innerHTML =`<button id="btn" name="btn" class="btn btn- btn-lg">${questionArray[num].options[i]}</button>`; 
    }
}
else{
    alert("No Questions Available")
}
}
var questionCount=0;
    function nextQuestion(e){

        var nextBtn=document.getElementById("nextBtn")
        questionCount++;
        showQuestion(questionCount)
    }

function putActive(e)
{
    if(e==1){
        var op=document.getElementById("option"+e)
        op.style.backgroundColor = "lightblue";
        op.e
        
    }
    if(e==2){
        var op=document.getElementById("option"+e)
        op.style.backgroundColor = "lightblue";
        
    }
    if(e==3){
        var op=document.getElementById("option"+e)
        op.style.backgroundColor = "lightblue";
       
    
    }
    if(e==4){
        var op=document.getElementById("option"+e)
        op.style.backgroundColor = "lightblue";
       
    
    }
}



var score;
function validate(e){
    var active= document.getElementsByClassName("active")
 if(active[0].innerHTML == questionArray[e].answer)   
{
    score+=10;
}
}