// JavaScript Document
    var playing = false;
    var score;
	var action;
	var timeremaining;
	var correctans;
	
	

document.getElementById("startreset").onclick = function(){
	
	if(playing == true){
		
		
		window.location.reload();
		
		}
		
		else{
			
			playing = true;
			score=0;
			
			document.getElementById("scorevalue").innerHTML = score;
			showElement("timeremaining");
			document.getElementById("startresetvalue").innerHTML="Reset Game";
			timeremaining = 60;
			document.getElementById("timeremainingvalue").innerHTML=timeremaining;
			startCountdown();
			hideElement("gameover");
			generateQA();
						
			}
	
	
	
	
	}
	
	for(i=1;i<5;i++)
	document.getElementById("box"+i).onclick=function(){
		if(playing == true){
			if(this.innerHTML == correctans){
				score++;
				document.getElementById("scorevalue").innerHTML=score;
				showElement("correct");
				setTimeout(function(){hideElement("correct")},1000);
				generateQA();
				}
				else{
					showElement("tryagain");
					setTimeout(function(){hideElement("tryagain")},1000);
					}
			
			}
		
		
		
		
		
		
		}
	
	
	function startCountdown(){
		
action = setInterval(function(){timeremaining -= 1;document.getElementById("timeremainingvalue").innerHTML=timeremaining;if(timeremaining == 0){
			    stopCountdown();
				showElement("gameover");
				var element1 = document.createElement('p');
			    element1.appendChild(document.createTextNode('Game Over!'));
			    document.getElementById("gameover").appendChild(element1);
			    var element2 = document.createElement('p');
			    element2.appendChild(document.createTextNode('Your Score is ' + score));
			    document.getElementById("gameover").appendChild(element2);
				hideElement("correct");
				hideElement("timeremaining");
				hideElement("tryagain");
				playing=false;
				document.getElementById("startresetvalue").innerHTML="Start Game";}},1000);}
		
		
		function stopCountdown(){
			clearInterval(action);
			
			}
			
		function showElement(e1){
				document.getElementById(e1).style.display="block";
			}
				
				
		function hideElement(e1){
				document.getElementById(e1).style.display="none";
			}
			
		function generateQA(){
				var x = 1+Math.round(Math.random()*10);
				var y = 1+Math.round(Math.random()*10);
				correctans=x*y;
				document.getElementById("question").innerHTML=x + "x" + y;
				var correctposition = 1+Math.round(Math.random()*3);
				document.getElementById("box"+correctposition).innerHTML=correctans;
				//fill other boxes with wrong answers
				var answer = [correctans];
				//while generating wrong answers check if it is not equal to correct ans and not equal to other wrong ans,if so keep generating wrong ans until not equal to both correctans and wrongans 
				//create an array initially with correctans and then check every generated wrongans is in the array or not,if it is not in the array assign it to a box and push it in the array.
				for(i =1;i<5;i++){
					var wrongans;
					do{
					wrongans= (1+Math.round(Math.random()*10)) * (1+Math.round(Math.random()*10));
					}while(answer.indexOf(wrongans)> -1)
					if(i!== correctposition){
					document.getElementById("box"+i).innerHTML=wrongans;
					answer.push(wrongans);
					}
					}
				
				}
	
	
		
		
		
		
		
		
		
		
		