//buttons
const close = document.querySelector('#close');
const open = document.querySelector('.btn-rules');
const rules = document.querySelector('.rules');

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

//Triangle Background
const triangle = document.querySelector('.triangle');

//Player and house variables
let player, house;

//Img path
const paperImg = '<img src="./images/icon-paper.svg" alt="Paper" />';
const scissorImg = '<img src="./images/icon-scissors.svg" alt="Scissor" />';
const rockImg = '<img src="./images/icon-rock.svg" alt="Rock" />';

//pick
const playerPick = document.querySelector('.pick');
const housePick = document.querySelector('.house');

//result
const result = document.querySelector('.result');
const resultText = document.querySelector('.result-text');
const playAgain = document.querySelector('.play');
let resultDisplayed = false;

if (resultDisplayed === true) {
	console.log(resultDisplayed);
}

//Event Listeners
paper.addEventListener('click', () => {
	player = 'paper';
	hideChoice(paperImg);
	house = houseChoice('rock', 'scissor');
	whoWon(player, house);
});

rock.addEventListener('click', () => {
	player = 'rock';
	hideChoice(rockImg);
	house = houseChoice('paper', 'scissor');
	whoWon(player, house);
	resultDisplayed = true;
});

scissor.addEventListener('click', () => {
	player = 'scissor';
	hideChoice(scissorImg);
	house = houseChoice('paper', 'rock');
	setInterval(whoWon(player, house), 2000);
});

close.addEventListener('click', () => {
	rules.style.display = 'none';
});

open.addEventListener('click', () => {
	rules.style.display = 'flex';
});

playAgain.addEventListener('click', () => {});

//Filters winningCombo
function whoWon(player, house) {
	if (
		winningCombo.filter((combo) => combo[0] === player && combo[1] === house)
			.length === 0
	) {
		result.style.display = 'flex';
		resultText.innerHTML = 'YOU LOST';
		score.innerHTML = parseInt(score.innerHTML) + 1;
		console.log('You lost');
	} else {
		result.style.display = 'flex';
		resultText.innerHTML = 'YOU WON';
		score.innerHTML = parseInt(score.innerHTML) + 1;
	}
}

//Returns a random choice for House
function houseChoice(choice1, choice2) {
	let random = Math.floor(Math.random() * 2);
	let choice;
	if (random === 1) {
		console.log('House chose ' + choice1);
		choice = choice1;
	} else {
		console.log('House chose ' + choice2);
		choice = choice2;
	}
	switch (choice) {
		case 'paper':
			scissor.innerHTML = paperImg;
			break;
		case 'scissor':
			scissor.innerHTML = scissorImg;
			break;
		case 'rock':
			scissor.innerHTML = rockImg;
			break;
		default:
			console.log('invalid');
	}
	return choice;
}

//Hide Other Choices
function hideChoice(imgPath) {
	paper.innerHTML = imgPath;
	scissor.classList = 'scissor blank';
	scissor.classList = 'scissor';
	triangle.style.display = 'none';
	rock.style.display = 'none';
	playerPick.style.display = 'block';
	housePick.style.display = 'block';
}
