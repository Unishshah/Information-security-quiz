
function check(){

	var question11 = document.quiz.question1.value;
    var question1 =   question11.toLowerCase();
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question90 = document.quiz.question9.value;
    var question9 =   question90.toLowerCase();
    var question110 = document.quiz.question10.value;
    var question10 =   question110.toLowerCase();
	
    var correct1 = 0;


	if (question1 == "security") {
		correct1++;
}
	if (question2 == "d") {
		correct1++;
}	
	if (question3 == "b") {
		correct1++;        
	}
    if (question4 == "b") {
		correct1++;
}
	if (question5 == "d") {
		correct1++;
}	
    if (question6 == "a") {
		correct1++;
}	
	if (question7 == "b") {
		correct1++;        
	}
    if (question8 == "c") {
		correct1++;
}
	if (question9 == "malware") {
		correct1++;
}
    if (question10 == "keylogger") {
		correct1++;
}
	    

	var messages = ["All of them are Wrong!","Do Better!","Do Better!","Do Better!","Your result is Average!","Your result is Average!","Your result is Average!","Good!","Well Done!","Well Done!","Excellent, you got all of them Correct!" ];
	var score;

	if (correct1 == 0) {
		score = 0;
       
	}
    if (correct1 == 1) {
		score = 1;
  
	}
    if (correct1 == 2) {
		score = 2;
       
	
    }
    if (correct1 == 3) {
		score = 3;
     
	}
    if (correct1 == 4) {
		score = 4;
      
	}
    if (correct1 == 5) {
		score = 5;
      
	}
    
        if (correct1 == 6) {
		score = 6;
       
	}
    if (correct1 == 7) {
		score = 7;
  
	}
    if (correct1 == 8) {
		score = 8;
       
	
    }
    if (correct1 == 9) {
		score = 9;
     
	}
    if (correct1 == 10) {
		score = 10;
      
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct1 + " correct.";
	
	}


