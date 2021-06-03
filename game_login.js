player__1 = localStorage.getItem("player_1");
player__2 = localStorage.getItem("player_2");

player1_score = 0 ; 
player2_score = 0 ; 

document.getElementById("player11").innerHTML = player__1 + ":";
document.getElementById("player22").innerHTML = player__2 + ":";

document.getElementById("player11_score").innerHTML = player1_score ;
document.getElementById("player22_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn" + player__1 ;
document.getElementById("player_answer").innerHTML = "Answer turn" + player__2 ;

function sent1()
 { get_word = document.getElementById("word").value; 
 word = get_word.toLowerCase(); 
 console.log("word in lowerCase = " + word); 
 charAt1 = word.charAt(1); 
 console.log(charAt1); 
 lenght_divide_2 = Math.floor(word.length/2); 
 charAt2 = word.charAt(lenght_divide_2); 
 console.log(charAt2); 
 lenght_minus_1 = word.length - 1;
  charAt3 = word.charAt(lenght_minus_1);
   console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_"); 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_"); 
    remove_charAt3 = remove_charAt2.replace(charAt3, "_"); 
console.log(remove_charAt3);
question_word = "<h3 id = 'hyperbole'> Q. "+ remove_charAt3 +" </h3>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
qic = question_word + input_box + check_button;
document.getElementById("output").innerHTML = qic;
document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check () {
    get_headphones = document.getElementById("input_check_box").value; 
    answer = get_headphones.toLowerCase(); 
    console.log("answer in lowerCase = " + answer);  
    if ( answer == word ){
        if ( answer_turn == "player1" )  {
            player1_score = player1_score + 1;
document.getElementById("player11_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
document.getElementById("player22_score").innerHTML = player2_score;
        
        }
    }

    if ( question_turn == "player1" )  {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn" + player__2 ;    }

    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn" + player__1 ;
    
    }

    if ( answer_turn == "player1" )  {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn" + player__2 ;    }

    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn" + player__1 ;
    
    }
    document.getElementById("output").value = "";
}
