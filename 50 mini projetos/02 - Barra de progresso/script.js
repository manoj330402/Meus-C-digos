const progresso = document.getElementById('progresso');
const voltar = document.getElementById('volt');
const proximo = document.getElementById('prox');
const circulos = document.querySelectorAll('.circulo');

let ativoAtual = 1;

proximo.addEventListener('click', () => 
{
    ativoAtual++

    if(ativoAtual > circulos.length)
    {
        ativoAtual = circulos.length;
    }

    update();
})


voltar.addEventListener('click', () => 
{
    ativoAtual--

    if(ativoAtual < 1)
    {
        ativoAtual = 1;
    }

    update();
})

function update()
{
    circulos.forEach((circulo, index) => 
    {
        if(index < ativoAtual)
        {
            circulo.classList.add('ativo')
        }
        else
        {
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo');

    const progressoAtivo = ((ativos.length - 1) / (circulos.length - 1)) * 100
    progresso.style.width =  `${progressoAtivo}%`;

    if(ativoAtual === 1) 
    {
        voltar.disabled = true;
    }
    else if(ativoAtual === circulos.length)
    {
        proximo.disabled = true;
    }
    else
    {
        voltar.disabled = false;
        proximo.disabled = false;
    }
}