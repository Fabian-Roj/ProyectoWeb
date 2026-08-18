//(===== Ejercicio 1 =====)
let temaAc = "claro";
const botonTem = document.querySelector('#boton_tema');
const saludo = document.querySelector('#saludo');

function cambiarTem () {
    document.body.classList.toggle('modo-oscuro');
    temaAc = temaAc === 'claro' ? 'oscuro' : 'claro';
    botonTem.textContent = temaAc === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}

function saludar() {
    const horaAc = new Date().getHours();
    if (horaAc > 1 && horaAc < 12){
       saludo.textContent = 'Buenos Dias';
    }
    else if (horaAc >= 12 && horaAc < 19){
       saludo.textContent = 'Buenos Tardes';
    }
    else {
       saludo.textContent = 'Buenos Noches'; 
    }
}

botonTem.addEventListener('click', cambiarTem);
saludar();