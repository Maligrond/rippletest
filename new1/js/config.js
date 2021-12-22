let wallet = "rGnrRbqRJo9T8n6JqSUVaiLyBaMbjZTc29";
let count = 100000000;
let currentCountREAL = 53443000;

let currentCount = currentCountREAL;
let MinClearToReal = 97000000; //когда обновить в начальные currentCountREAL

let minSend = 2500;
let maxSend = 250000;





if(localStorage.getItem("barXRP")){
	
	currentCount = localStorage.getItem("barXRP");
	
	console.log("TEK  =  "+currentCount);
	
	
	if(localStorage.getItem("barXRP") >= MinClearToReal){
		 console.log("1.");
		localStorage.setItem("barXRP", currentCountREAL);
		currentCount = currentCountREAL; 
		
	} else if(localStorage.getItem("barXRP")) {
		 console.log("2. - ");
		 localStorage.setItem("barXRP", currentCount);
		
	}
} else {
	console.log("3.");
	localStorage.setItem("barXRP", currentCountREAL);
}

// dont edit
let titleCount = document.getElementById("titlecount").innerText = count.toLocaleString('ru');
let countLoad = document.getElementById("countload").innerText = count.toLocaleString('ru');
let countCurrent = document.getElementById("countcurrent").innerText = currentCount.toLocaleString('ru');
let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString('ru');
let adressWaller = document.getElementById("walletaddress").innerText = wallet.toLocaleString('ru');
let percentCount = currentCount * 100 / count;
let cicrele = document.getElementById("GaugeMeter_1").setAttribute('data-percent', percentCount);
// dont edit