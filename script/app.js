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
let player, house, playerColor;

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

//Event Listeners
paper.addEventListener('click', () => {
	disableBtn();
	playerColor = ' paper-color';
	player = 'paper';
	hideChoice(paperImg, playerColor);
	house = houseChoice('rock', 'scissor');
	whoWon(player, house);
});

rock.addEventListener('click', () => {
	disableBtn();
	playerColor = ' rock-color';
	player = 'rock';
	hideChoice(rockImg, playerColor);
	house = houseChoice('paper', 'scissor');
	whoWon(player, house);
});

scissor.addEventListener('click', () => {
	disableBtn();
	playerColor = ' scissor-color';
	player = 'scissor';
	hideChoice(scissorImg, playerColor);
	house = houseChoice('paper', 'rock');
	whoWon(player, house);
});

close.addEventListener('click', () => {
	rules.style.display = 'none';
});

open.addEventListener('click', () => {
	rules.style.display = 'flex';
});

playAgain.addEventListener('click', () => {
	enableBtn();
	paper.innerHTML = paperImg;
	scissor.innerHTML = scissorImg;
	rock.innerHTML = rockImg;
	result.style.display = 'none';
	scissor.classList = 'scissor';
	triangle.style.display = 'block';
	rock.style.display = '';
	playerPick.style.display = 'none';
	housePick.style.display = 'none';
	paper.classList = 'paper';
});

//Filters winningCombo
function whoWon(player, house) {
	if (
		winningCombo.filter((combo) => combo[0] === player && combo[1] === house)
			.length === 0
	) {
		result.style.display = 'flex';
		resultText.innerHTML = 'YOU LOST';
		if (score.innerHTML === '0') {
			score.innerHTML = 0;
		} else {
			score.innerHTML = parseInt(score.innerHTML) - 1;
		}
	} else {
		result.style.display = 'flex';
		resultText.innerHTML = 'YOU WON';
		score.innerHTML = parseInt(score.innerHTML) + 1;
	}
}

//Returns a random choice for House
function houseChoice(choice1, choice2) {
	let random = Math.floor(Math.random() * 2);
	let choice = random === 1 ? choice1 : choice2;
	switch (choice) {
		case 'paper':
			scissor.innerHTML = paperImg;
			scissor.classList += ' paper-color';
			break;
		case 'scissor':
			scissor.innerHTML = scissorImg;
			scissor.classList += ' scissor-color';
			break;
		case 'rock':
			scissor.innerHTML = rockImg;
			scissor.classList += ' rock-color';
			break;
		default:
			console.log('invalid');
	}
	return choice;
}

//Hide Other Choices
function hideChoice(imgPath, playerColor) {
	paper.innerHTML = imgPath;
	paper.classList += playerColor;
	scissor.classList = 'scissor blank';
	scissor.classList = 'scissor';
	triangle.style.display = 'none';
	rock.style.display = 'none';
	playerPick.style.display = 'block';
	housePick.style.display = 'block';
}

//Disable Button
function disableBtn() {
	paper.style.cssText = 'pointer-events: none;';
	rock.style.cssText = 'pointer-events: none;';
	scissor.style.cssText = 'pointer-events: none;';
}

function enableBtn() {
	paper.style.cssText = 'pointer-events: all;';
	rock.style.cssText = 'pointer-events: all;';
	scissor.style.cssText = 'pointer-events: all;';
}
