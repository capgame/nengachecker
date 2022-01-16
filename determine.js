let nengaNumInput = document.getElementById("nengaNumber");
let results = document.getElementById("results");

nengaNumInput.onkeydown = (e) => {
	let n = nengaNumInput.value;
	if(e.code === "Enter"){
		determine(n);
		nengaNumInput.value = "";
	}
}
document.querySelector("#checkButton").onclick = () => {
	let n = nengaNumInput.value;
	determine(n);
	nengaNumInput.value = "";
};
function determine(num){
	let fullNum = null;
	let didWin = false;
	for(let i of wins){
		if(num === i[1]){
			win(num,i[0]);
			didWin = true;
			continue;
		}
		if(num === i[1].slice(-2)){
			if(!fullNum){
				while(true){
					f = prompt("番号の6桁を半角数字で入力してください。");
					if(!isNaN(f) && f.length === 6){
						fullNum = f;
						break;
					}
				}
			}
			if(fullNum.slice(-i[1].length) === i[1]){
				win(fullNum,i[0]);
				didWin = true;
				continue;
			}
		}
	}
	if(!didWin)	lose(fullNum || num);
}

function win(num,grade){
	let e = `<div class="result"><div class="number">${num}：</div><div class="atari">${grade}</div></div>`
	results.innerHTML = e + results.innerHTML;
}
function lose(num){
	let e = `<div class="result"><div class="number">${num}：</div><div class="hazure">はずれ...</div></div>`
	results.innerHTML = e + results.innerHTML;
}