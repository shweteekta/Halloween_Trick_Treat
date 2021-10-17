const adjectives = [
	"Big",
	"Small",
	"Lucky",
	"Happy",
	"Sad",
	"Brave",
	"Little",
	"Funny",
	"Kind",
	"Ancient",
	"Fast",
	"Slow"
];

const colors = [
	"red",
	"green",
	"blue",
	"yellow",
	"pink",
	"black",
	"white",
	"grey",
	"orange",
	"purple"
];

const nouns = [
	"ghost",
	"ghoul",
	"monster",
	"vampire",
	"werewolf",
	"skeleton",
	"pumpkin",
	"witch",
	"cat",
	"bat"
];

function calcAdjective(s) {
	if (!s) return adjectives[0];
	let value = [...s].reduce((acc, c) => acc + c.charCodeAt(0), 0);
	return adjectives[value % adjectives.length];
}

function calcColor(s) {
	if (!s) return colors[0];
	let value = [...s].reduce((acc, c) => acc * c.charCodeAt(0), 1);
	return colors[value % colors.length];
}

function calcNoun(s) {
	let value = [...s].reduce((acc, c) => acc + c.charCodeAt(0), 0);
	// let value = [...s].reduce((acc, c) => acc * 2, 1);
	// let value = Math.floor(Math.random() * nouns.length);
	return nouns[value % nouns.length];
}

function calculateHalloweenName(s) {
	return `${calcAdjective(s)} ${calcColor(s)} ${calcNoun(s)}`;
}

function generateResult() {
	let realName = document.getElementById("real-name").value;
	let name = calculateHalloweenName(realName);
	let resultP2 = document.getElementById("result-name");
	resultP2.innerHTML = name;
}

// #3e332b

function changeColorMode(mode) {
	document.getElementsByTagName("body")[0].className = mode;
}

changeColorMode("dark");