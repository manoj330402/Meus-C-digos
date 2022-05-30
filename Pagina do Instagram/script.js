// MAP COM THIS

// const maca = 
// {
//     value: 2,
// }

// const laranja =
// {
//     value: 3,
// }

// function mapComThis(arr, thisArg)
// {
//     return arr.map(function(item) {
//         return item * this.value;
//     }, thisArg);
// }

// const nums = [1, 2]

// console.log('this -> maçã', mapComThis(nums, maca));

// console.log('this -> laranja', mapComThis(nums, laranja));



//MAP SEM THIS


// function mapSemThis(arr)
// {
//     return arr.map(function(item)
//     {
//         return item * 2;
//     });
// }

// const num = [2, 4, 6, 8, 10]

// console.log(mapSemThis(num));



//FILTER


// function filtraPares(arr)
// {
//     return arr.filter(function(item)
//     {
//         return item % 2 === 0;
//     });
// }

// const myarr = [1, 23, 55, 67, 30, 2, 4]

// console.log(filtraPares(myarr));


//REDUCE

/*Crie uma função que some todos os numeros numericos */
// function somaNumeros(arr)
// {
//     return arr.reduce(function(prev, current)
//     {
//         console.log({prev});
//         console.log(current);
//         return prev + current;
//     });
// }

// const arrai = [1, 2, 5, 7, 10];

// console.log(somaNumeros(arrai));




/*Crie uma função que recebe uma lista de preços e um numero representando o saldo disponivel. Calcule qual será o saldo final e após subtrair todos os preços da lista enviada */
// const lista = [
//     {
//         name: 'sabão em pó',
//         preco: 30   
//     },
//     {
//         name: 'cereal',
//         preco: 12
//     },
//     {
//         name:'toalha',
//         preco: 30
//     }
// ];

// const saldoDisponivel = 100;

// function calculaSaldo(saldoDisponivel, lista)
// {
//     return lista.reduce(function(prev, current, index)
//     {
//         console.log('rodada', index + 1);
//         console.log({prev});
//         console.log({current});
//         return prev - current.preco
//     }, saldoDisponivel);
// }

// console.log(calculaSaldo(saldoDisponivel, lista));

// import fetch from "node-fetch";
