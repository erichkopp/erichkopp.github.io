
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

// function getComputerChoice () {
// 	const choices = ['r', 'p', 's'];
// 	console.log(Math.random());
// }
// getComputerChoice();

// function game (userChoice) {
// 	console.log(userChoice);
// }

// function main() {
// 	rock.addEventListener('click', function() {
// 		game("r");
// 		// console.log("Hey you clicked on ROCK");
// 	})
// 	paper.addEventListener('click', function() {
// 		game("p");	
// 		// console.log("Hey you clicked on PAPER");
// 	})
// 	scissors.addEventListener('click', function() {
// 		game("s");
// 		// console.log("Hey you clicked on SCISSORS");
// 	})
// }


// main();













































// ties
// rock rock
// paper paper
// scissors scissors

// wins
// rock scissors
// paper rock
// scissors paper

// loses
// scissors rock
// rock paper
// paper scissors









































let user_score = 0
let comp_score = 0
// let user = false

function user_shoot() {
	$('#rock').click(function() {
		$(".choices").fadeOut(500);

		// alert("User shoots ROCK");
		initiate_game("ROCK");
	});

	$('#paper').click(function() {
		$(".choices").fadeOut(500);
		// alert("User shoots PAPER");
		initiate_game("PAPER");		
	});

	$('#scissors').click(function() {
		$(".choices").fadeOut(500);
		// alert("User shoots SCISSORS");
		initiate_game("SCISSORS");
	});
}


function initiate_game(user_choice) {
	let round = ""
	var comp = ["ROCK", "PAPER", "SCISSORS"];
	var comp_rand = comp[Math.floor(Math.random() * comp.length)];

	// alert(`Computer shoots ${comp_rand}`);

	round = (`${user_choice}${comp_rand}`);
	console.log(round);

	if(round =="PAPERROCK"||round=="ROCKSCISSORS"||round=="SCISSORSPAPER") {
		// console.log("You Win!");
		$('#message').html(`Computer shoots ${comp_rand}. You win!`);
		$('#play_again').show();
		$('#play_again').click(function (){
			$('.choices').show();
			$('#play_again').hide();
			$('#message').html('');
			$('#user').html(`${user_score}`)
		});			
		user_score+=1;
	}else if(round =="SCISSORSROCK"||round=="ROCKPAPER"||round=="PAPERSCISSORS") {
		// console.log("You Lose!");
		$('#message').html(`Computer shoots ${comp_rand}. You lose!`);
		$('#play_again').show();
		$('#play_again').click(function (){
			$('.choices').show();
			$('#play_again').hide();
			$('#message').html('');
			$('#comp').html(`${comp_score}`)			
		});					
		comp_score+=1;
	}else {
		// console.log("Tie!");
		$('#message').html(`Computer shoots ${comp_rand}. Tie!`);
		$('#play_again').show();
		$('#play_again').click(function (){
			$('.choices').show();
			$('#play_again').hide();
			$('#message').html('');
		});				
	}

	console.log(`${user_score} ${comp_score}`);

	if(user_score==3) {
		console.log("You're the Champion!");
	}else if(comp_score==3) {
		console.log("Computer wins!");
	}
}
	

// for(i=0; i<3; i++)
user_shoot();



if(user_score == 3) {
	$('#message').html("You're the CHAMPION!")
	// $(".boxes").fadeOut();
}

else if(comp_score == 3) {
	$('#message').html("Computer is the CHAMPION!")
	// $(".boxes").fadeOut();
}
































// do {
	// if (user_score < 3 && comp_score < 3) {



// 		// 	}
// 		// while(user_score < 3 && comp_score < 3);	
// 	// while(user_score < 3 && comp_score < 3);
// // }

// // if(user != false) {

// // do {	


// user_shoot(user)

// user = ""
// user_shoot(user)


// }
// while(user_score < 3 && comp_score < 3);


// if(user_score==3) {
// 	console.log("You're the Champion!");
// }else if(comp_score==3) {
// 	console.log("Computer wins!");
// }else {
// 	user_shoot(user);}
