const btn = document.querySelector(".btn")
const cep = document.querySelector("#cep-input");
const logradouro = document.querySelector("#logradouro-input");
const bairro = document.querySelector("#bairro-input");
const cidade = document.querySelector("#cidade-input");
const estado = document.querySelector("#estado-input");
const numero = document.querySelector("#numero-input");

//Preencher informações do formulario a partir do CEP.
cep.addEventListener("blur", () => 
{
    
    if(cep.value.length > 0) {

        let url = fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

        url.then(r => r.json())
        .then(jsonBody => 
        {
            logradouro.value = jsonBody.logradouro;
            bairro.value = jsonBody.bairro;
            cidade.value = jsonBody.localidade;
            estado.value = jsonBody.uf;
            numero.focus();
        })
        .catch(() => {

            if(cep.value.length > 0 && cep.value.length < 8 || cep.value.length > 8) {
                console.log('CEP inválido');
            } else if(cep.value.lengt) {
                
            }
        })
    }
})


//Consumindo api de estados e criando a lista no select
const uf = fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
.then(r => r.json())
.then(jsonBodyUf => {
    
    for(let i = 0; i < jsonBodyUf.length; i++) {
        
        const select = document.querySelector('#estado-input')
        const criarOpc = document.createElement("option")
        
        //criando a tag option e adicionado valor a ela
        criarOpc.value = jsonBodyUf[i].sigla
        criarOpc.innerText = jsonBodyUf[i].nome
        
        //adicionando as options dentro do select
        select.appendChild(criarOpc)
        // console.log(select);
    }
});

btn.addEventListener('click', e => e.preventDefault());


