$(document).ready(function() {
	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	createCrystals();
	newGame();

	function createCrystals(){
		var numbers = []
			while(numbers.length < 4){
			  var randomNumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i < numbers.length; i++){
				if (numbers[i] == randomNumber){
					found = true; 
					break;
				}
			  }
			  if(!found)numbers[numbers.length] = randomNumber;
			}	
		for (i = 0; i < numbers.length; i++){
			var imgCrystal = $('<img>');
			imgCrystal.attr('data-num', numbers[i]);
			imgCrystal.attr('src', crystals[i]);
			imgCrystal.attr('alt', 'crystals');
			imgCrystal.addClass('crystalImg')
			$('#crystals').append(imgCrystal);
		}
	}

	function newGame(){
		counter = 0;
		$('#yourScore').text(counter);
		function randomInt(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}
		var numberToGuess = randomInt(19,120);
		$('.value').text(numberToGuess);
		$('.crystalImg').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));		   
		    $('#yourScore').text(counter);
		    if (counter == numberToGuess){
		    	$('#status').text('Winner!');
		    	wins++;
		    	$('#win').text(wins);
		    	$('#crystals').empty();
		    	createCrystals();
		    	newGame();	        
		    } else if (counter > numberToGuess){
		        $('#status').text('Loser!')
		        losses++;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        createCrystals();
		        newGame();
		    }
		});
	}
});