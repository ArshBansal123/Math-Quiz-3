player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn- "+player2_name;

function send() {
    number1 = document.getElementById("first_number").value;
    number2 = document.getElementById("second_number").value;
    console.log(number1 + "gg" + number2)
    actual_answer= parseInt(number1) * parseInt(number2);
    
    question_number= "<h4 id= 'question_number_h4'> " + number1 + " x " + number2 + " = " + "</h4>";
    input_box= "<br><input type= 'text' id= 'input_check_box'>";
    check_button= "<br><br><button id= 'check_button' onclick= 'check()'>Check</button>";
    row= question_number + input_box + check_button;

    document.getElementById("div_answer").innerHTML= row;
    document.getElementById("first_number").value= " ";
    document.getElementById("second_number").value= " ";
}