import { Dato } from '../classes/dato.class'
import { listaDatos } from '../index'


const campoMostrarDatos = document.querySelector('#campo-mostrar-datos');
const btnAgregar = document.querySelector('.agregar');
const cajaEntrada = document.querySelector('.caja-entrada');
const btnBorrar = document.querySelector('.borrar');

export const crearDatoHtml = (datoRecibido) => {
    console.log('------------Datos-------------');
    console.log(datoRecibido.dato);
    console.log(datoRecibido.id);
    console.log(datoRecibido.color);
    console.log('------------Datos-------------');


    const htmlDato = `
    <li class="dato-ingresado" data-id=" ${datoRecibido.id} ">
    <div class="contenido" style="background-color: ${datoRecibido.color};">

    <label class="texto-duro">${datoRecibido.dato}</label>

        <button class="btn borrar"> x </button>

    </div>
    </li>
    `;

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

btnBorrar.addEventListener('click', (event) => {
    const botonDatoPresionado = event.target.parentElement.parentElement;//Obtiene la referencia del elemento en el que se encuentra.
    const idDatoBotonPresionado = botonDatoPresionado.getAttribute('data-id');
    listaDatos.eliminarDato(idDatoBotonPresionado);
});