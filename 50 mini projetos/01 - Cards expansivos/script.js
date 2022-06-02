const painels = document.querySelectorAll('.painel');

painels.forEach((painel) => 
{
    painel.addEventListener('click', () => 
    {
        removerClasseAtiva();
        painel.classList.add('ativo');
    })
})

function removerClasseAtiva() 
{
    painels.forEach(painel =>
        {
            painel.classList.remove('ativo')
        })
}