
setTimeout(function(){

	var numSquare=6;
	var color=generateRandomColor(numSquare);
	var displayColor=document.querySelector(".displayColor");
	var rand=Math.floor(Math.random()*6 ); 
	var pickedColor=color[rand];
	console.log(pickedColor);
	displayColor.textContent=pickedColor;
	var h1=document.querySelector("h1");
	
    var square=document.querySelectorAll(".square");
    var message=document.querySelector("#message");
    
   	var newColor=document.querySelector("#newColor");
   	var easyBtn=document.querySelector("#easyBtn");
   	var hardBtn=document.querySelector("#hardBtn");
   	easyBtn.addEventListener("click",function(){
   		easyBtn.style.backgroundColor="blue";
   		hardBtn.style.backgroundColor="white";
   		numSquare=3;
   		 rand=Math.floor(Math.random()*3 );
   		color=generateRandomColor(numSquare);
   		pickedColor=color[rand];
   		displayColor.textContent=pickedColor;
   		for (var i = 0; i <square.length; i++) {
   			if(color[i]){
   				square[i].style.backgroundColor=color[i];

   			}	
   			else{
   				square[i].style.display="none";
   			}
   		}	
   	})
   	hardBtn.addEventListener("click",function(){
   		easyBtn.style.backgroundColor="white";
   		hardBtn.style.backgroundColor="blue";
   		numSquare=6;
   		 rand=Math.floor(Math.random()*3 );
   		color=generateRandomColor(numSquare);
   		pickedColor=color[rand];
   		displayColor.textContent=pickedColor;
   		for (var i = 0; i <square.length; i++) {
   			if(color[i]){
   				square[i].style.backgroundColor=color[i];
   				square[i].style.display="block";
   			}	
   			
   		}
   	})
   	newColor.addEventListener("click",function(){
   		 color=generateRandomColor(numSquare);
   		 rand=Math.floor(Math.random()*numSquare ); 
		 pickedColor=color[rand];
		displayColor.textContent=pickedColor;
		 for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor=color[i];
		}
		newColor.textContent="New Color";
		h1.style.backgroundColor="rgb(0, 0,0)";

   	})
    console.log(rand);
    for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor=color[i];
		square[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			
			
			
			if(clickedColor==pickedColor){
				newColor.textContent="Play Again!";
				message.textContent="correct";	
				correctColor(clickedColor);
				h1.style.backgroundColor=clickedColor;			
			}
			else{
				message.textContent="try Again!";
				this.style.backgroundColor="rgb(0, 0, 0)";
			}
		})
	}	
	function correctColor(color){
		for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor=color;
		}

	}
	function generateRandomColor(num){
		
		var arr=[];
		for (var i = 0; i < num; i++) {
				arr.push(randomColor());
			}	
		 return arr
	}
	function randomColor(){
		var num1=Math.round(Math.random()*255);
		var num2=Math.round(Math.random()*255);
		var num3=Math.round(Math.random()*255);
		return "rgb("+num1+", "+num2+", "+num2+")";
	}
},500)