
//Apenas números de 1 a 3999
    
function romparaara() {
 
    let rom1 = document.querySelector("#romano1").value
    let ara2 = document.querySelector("#arabe2")
     
    const keys = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "Z": 0
    }
    
    let total = 0;
    
    // rom1 = [M, C, C, L, X, I, X]
    
    for(let i = 0; i < rom1.length; i++){
        // Passando a primeira vez com i = 0;
        
        const current = rom1[i]; // M
        const next = rom1[i + 1] || 'Z'; // C
        const prev = rom1[i - 1] || 'Z'; // Z
        
        let currentValue = 0;        
    
        // se keys[M] (1000) >= keys[C] (100)  
        if(keys[current] >= keys[next] ) {
            currentValue = keys[current]
        // senão keys[M] (1000) < keys[C] (100)
        }else if(keys[current] < keys[next]) {
        currentValue = keys[next] + (keys[current] * -1)
        // senão keys[M] (1000) < keys[Z] (0)
        }else if(keys[current] > keys[prev] ){
        currentValue = 0
        }
        
        console.log(rom1)

        total += currentValue
    }
    
    if(total > 3999) {
        alert("Somente números entre 1 a 3999")
        total = ""
    }

    ara2.value = total;
    return total;
    
    
}


function arapararom() {
    
    let ara1 = document.querySelector("#arabe1")
    let rom2 = document.querySelector("#romano2") 

}


function soletras(e) {
    var expressao;

    expressao = /[a-zA-Z]/;

    if(expressao.test(String.fromCharCode(e.keyCode)))
    {
        return true;
    }
    else
    {
        return false;
    }
}


function sonumeros(e) {
    var expressao;

    expressao = /[0-9]/;

    if(expressao.test(String.fromCharCode(e.keyCode)))
    {
        return true;
    }
    else
    {
        return false;
    }
}
