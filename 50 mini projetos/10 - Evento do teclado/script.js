const inserir = document.getElementById('inserir')

window.addEventListener('keydown', e => 
{
    inserir.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>

        <div class="key">
            Pressione qualquer tecla para obter o código da tecla
        </div>`

    // console.log(e.code, e.key, e.keyCode);
})

