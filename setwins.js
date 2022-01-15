let winGradeInput = document.getElementById("addWinGrade");
let winNumberInput = document.getElementById("addWinNumber");
let winButton = document.getElementById("addWinButton");

let wins = [["1等","757462"],["2等","6335"],["3等","60"],["3等","58"],["3等","50"]];

let winsList = document.getElementById("winsList");

onload = () => {
	redisplayWins();
}

addWinButton.addEventListener("click",function(){
	let grade = winGradeInput.value;
	let number = winNumberInput.value;
	let errmsg = "";
	if(grade === "" || number === ""){
		errmsg += "当たりの等級と番号を入力してください。\n";
	}
	if(isNaN(number)){
		errmsg += "当選番号は半角の数字で入力してください。<br>";
	}
	if(errmsg){
		alert(errmsg);
		return;
	}

	wins.push([grade,number]);
	winGradeInput.value = "";
	winNumberInput.value = "";

	redisplayWins();
});

function redisplayWins(){
	winsList.innerHTML = "";

	for(let [i,[grade,num]] of wins.entries()){
		let e = `<div class="win"><div class="grade">${grade}</div><div class="number">${num}</div><div class="delete"><a href="#" onclick="deleteWin(${i})">×</a></div></div>`
		winsList.innerHTML += e;
	}
}
function deleteWin(n){
	wins.splice(n,1)
	redisplayWins();
}