const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => 
    {
        label.innerHTML = label.innerText
            .split('')
            .map((letra, index) => `<span style="transition-delay: ${index * 50}ms;">${letra}</span>`)
            .join('')
    })