const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() 
{
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => 
        {
            const boxTop = box.getBoundingClientRect().top

            if(boxTop < triggerBottom) box.classList.add('mostrar')
            else box.classList.remove('mostrar')
        })
}





//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getBoundingClientRect
