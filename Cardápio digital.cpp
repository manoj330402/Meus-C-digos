#include <iostream>
#include <locale>
using namespace std;
int main()
{
	setlocale(LC_ALL, "ptb");
	
	int numpedido, quantidade;
	float valorPedido;
	char add2='s';
	bool add;
	
	add=true;
	
	cout <<"*** Cardápio ***";
	cout <<"\n100 – Hambúrguer – R$5,50";
	cout <<"\n101 – Cachorro-quente – R$4,50";
	cout <<"\n102 – Milkshake – R$7,00";
	cout <<"\n103 – Pizza brotinho – R$8,00";
	cout <<"\n104 - Cheeseburguer – R$8,50";
	
	while (add==true) {
		
		cout <<"\nInforme o código do seu pedido: ";
		cin >> numpedido;
		cout <<"\nInforme a quantidade: ";
		cin >> quantidade;
		
		switch(numpedido) {
			case 100:
				valorPedido+=quantidade*5.50;
				break;
			case 101:
				valorPedido+=quantidade*4.50;
				break;
			case 102:
				valorPedido+=quantidade*7.00;
				break;
			case 103:
				valorPedido+=quantidade*8.00;
				break;
			case 104:				
				valorPedido+=quantidade*8.50;
				break;
			default:
				cout <<"Código invalido!";
		}
		
		cout <<"\nDeseja adiconar mais algum item no pedido? S/N ";
		cin >> add2;
				
		if(add2=='s' || add2=='S') {
			add=true;
		}
		else {
			add=false;
		}
		
	}
			
	if(valorPedido>0) {
		cout <<"O seu pedido irá custar R$" << valorPedido;
	}
	else {
		cout <<"Você não pediu nada VAGABUNDO!!";
	}
}
