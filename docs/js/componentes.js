import { Dato } from '../classes/dato.class'
import { listaDatos } from '../index'


const campoMostrarDatos = document.querySelector('#campo-mostrar-datos');
const btnAgregar = document.querySelector('.agregar');
const cajaEntrada = document.querySelector('.caja-entrada');
const seleccionAzar = document.querySelector('#seleccionar');
const resultado = document.querySelector('#caja-resultado');


export const crearDatoHtml = (datoRecibido) => {
    const htmlDato = `
    <li class="dato-ingresado" data-id=" ${datoRecibido.id} ">
    <div class="contenido" style="background-color: ${datoRecibido.color};">

    <label class="texto-duro">${datoRecibido.dato}</label>
        <button class="btn borrar"> x </button>
    </div>
    </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlDato;

    campoMostrarDatos.append(div.firstElementChild);

    return div;

}

const clickAgregar = () => {
    const nuevoDatoRecibido = new Dato(cajaEntrada.value);
    listaDatos.nuevoDato(nuevoDatoRecibido);
    crearDatoHtml(nuevoDatoRecibido);
    cajaEntrada.value = '';
    console.log(listaDatos);


}


btnAgregar.addEventListener('click', () => {
    if (cajaEntrada.value.length > 0) {


        clickAgregar();
    }

});


cajaEntrada.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && cajaEntrada.value.length > 0) {
        clickAgregar();
    }

});

campoMostrarDatos.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const botonDatoPresionado = event.target.parentElement.parentElement;//Obtiene la referencia del elemento en el que se encuentra.
    const idDatoBotonPresionado = botonDatoPresionado.getAttribute('data-id');

    if (nombreElemento.includes('button')) {//presiono la x para borrar el elemento.
        listaDatos.eliminarDato(idDatoBotonPresionado);
        campoMostrarDatos.removeChild(botonDatoPresionado);
        console.log(listaDatos);
    }
});

seleccionAzar.addEventListener('click', () => {

    resultado.classList.remove('resultado');

    setTimeout(() => {
        if (listaDatos.datos.length > 0) {
            let azar = listaDatos.seleccionarAzar();
            let datoResultado = listaDatos.datos[azar].dato;
            let colorResultado = listaDatos.datos[azar].color;

            console.log(resultado.style.backgroundColor = `${colorResultado}`);


            resultado.style.backgroundColor = `${colorResultado}`;
            resultado.innerHTML = (` ${datoResultado} `);

            resultado.classList.add('resultado');


        } else {
            resultado.innerHTML = (`¿ ... ?`);

        }
    }, 200);



});