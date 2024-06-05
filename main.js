const form = document.getElementById('formulario-verificador');
console.log(form);

function verificadorNumero(numero1, numero2){
    const verificador = numero1<numero2;
    return  verificador;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const primeiroNumero = document.getElementById('numero1');
    const segundoNumero = document.getElementById('numero2');
    let verificadoContainer = false;
    verificadoContainer = verificadorNumero(primeiroNumero.value,segundoNumero.value);

    if(verificadoContainer){
        document.querySelector('#sucess').style.display = 'block';
        document.querySelector('#error').style.display = 'none';

    }else{
        
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#sucess').style.display = 'none';
        
    }

})

