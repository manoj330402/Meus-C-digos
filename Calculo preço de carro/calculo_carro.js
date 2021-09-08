let codAdd = 1
let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
conti = "S"

console.log("**** Adicionais ***");
console.log("0 - Sem adicional");
console.log("1 - Trio Elétrico (alarme, vidro elétrico e trava elétrica)");
console.log("2 - Ar Condionado");
console.log("3 - Direção Hidráulica");
console.log("4 - Completo");


do {

	console.log("Indique o valor do automóvel: R$");

	switch (codAdd) {
		case 0:
			//add="Sem Adicional";
			valorAdd=0;
			valorF=valorI+(valorI*0.08);
			break;
		case 1:
			//add="Trio Elétrico";
			valorAdd=(valorI+(valorI*0.08))*0.02;
			valorF=valorI+(valorI*0.08)+valorAdd;
			cont1++;
			break;
		case 2:
			//add="Ar Condionado";
			valorAdd=(valorI*0.02);
			valorF=valorI+(valorI*0.08)+valorAdd;
			cont2++;
			break;
		case 3:
			//add="Direção Hidráulica";
			valorAdd=(valorI*0.02);
			valorF=valorI+(valorI*0.08)+valorAdd;
			cont3++;
			break;
		case 4:
			//add="Completo";
			valorAdd=(valorI*0.02)+(valorI*0.02)+(valorI+(valorI*0.08))*0.02;
			valorF=(valorI+(valorI*0.08)+valorAdd)*0.965;
			cont4++;
			break;
		default:
			alert("Código Inválido!")
	}
} while (codAdd >= 0 && codAdd <= 4 && conti == "S")