function czas() {
	var godzina = new Date();
	var h = godzina.getHours();
	var m = godzina.getMinutes();
	if (m < 10)
		m = "0" + m;

	var s = godzina.getSeconds();
	if (s < 10)
		s = "0" + s;

	var t = setTimeout(czas, 1000);

	var Dzis = new Date();
	var Data = new Date("2020,9,26");
	var jeden_dzien = 1000 * 60 * 60 * 24;
	Dzis = Dzis.getTime();
	var roznica = Data - Dzis;
	roznica = Math.floor(roznica / jeden_dzien) + 1;


	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function () {
		output.innerHTML = this.value;

	}
	document.getElementById('zegar').innerHTML = h + ":" + m + ":" + s;
	document.getElementById('iledni').innerHTML = "Days left to next meeting:  " + roznica;
}

/*document.addEventListener('DOMContentLoaded', function () {
	const inputy = document.querySelectorAll(".footer__top input");
	console.log(inputy);

	for (let i = 0; i < inputy.length; i++) {
		inputy[i].style.border = "2px solid grey";
	}
})*/
	
	



