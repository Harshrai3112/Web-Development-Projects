window.setTimeout(function(){
	var p1Button=document.querySelector("#p1");
	var p2Button=document.querySelector("#p2");
	var p1Display=document.getElementById("p1Score");
	var p2Display=document.getElementById("p2Score");
	var p1Score=0;
	var p2Score=0;
	var winningScore=5;
	var gameOver=false;
	var reset=document.querySelector("#reset");
	var input =document.querySelector("input");
	var winningScoreChange=document.querySelector("p span");
	var winPara=document.querySelector("#win");
	p1Button.addEventListener("click",function(){
		if (gameOver==false) {
			p1Score++;
			if (p1Score===winningScore) {
				gameOver=true;
				p1Display.classList.add("green");
				winPara.textContent="Player one Wins";
			}
			p1Display.textContent=p1Score;
		}
	})
	p2Button.addEventListener("click",function(){
		if(gameOver==false){
			p2Score++;
			if(p2Score===winningScore){
				gameOver=true;
				p2Display.classList.add("green");
				winPara.textContent="Player two Wins";
			}
			p2Display.textContent=p2Score;
		}
	})
	reset.addEventListener("click",function(){
		ret();

	})
	function ret(){
		gameOver=false;
		p1Score=0;
		p2Score=0;
		p1Display.textContent=0;
		p2Display.textContent=0;
		p1Display.classList.remove("green");
		p2Display.classList.remove("green");
		winPara.textContent="Who wins";
		
	}
	input.addEventListener("change",function(){
		winningScoreChange.textContent=this.value;
		winningScore=Number(this.value);
		ret();
	})
},50)