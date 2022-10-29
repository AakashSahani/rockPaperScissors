//Choices
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');

//Score
const score = document.querySelector('.tracker');

//Winning Combination
const winningCombo = [
	['paper', 'rock'],
	['rock', 'scissor'],
	['scissor', 'paper'],
];

//Player and house variables
let player, house;

//Event Listeners
paper.addEventListener('click', () => {
	player = 'paper';
	house = houseChoice('rock', 'scissor');
	whoWon(player, house);
});

rock.addEventListener('click', () => {
	player = 'rock';
	house = houseChoice('paper', 'scissor');
	whoWon(player, house);
});

scissor.addEventListener('click', () => {
	player = 'scissor';
	house = houseChoice('paper', 'rock');
	whoWon(player, house);
});

//Filters winningCombo
function whoWon(player, house) {
	if (
		winningCombo.filter((combo) => combo[0] === player && combo[1] === house)
			.length === 0
	) {
		console.log('You lost');
	} else {
		console.log('You won');
		score.innerHTML = parseInt(score.innerHTML) + 1;
	}
}

//Returns a random choice for House
function houseChoice(choice1, choice2) {
	let random = Math.floor(Math.random() * 2);
	if (random === 1) {
		console.log('House chose ' + choice1);
		return choice1;
	} else {
		console.log('House chose ' + choice2);
		return choice2;
	}
}
