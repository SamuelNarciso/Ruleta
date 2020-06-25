import './styles.css';
import { Dato, DatoList } from './classes'
import { crearDatoHtml } from './js/componentes';

export const listaDatos = new DatoList();


console.log(listaDatos);


listaDatos.datos.forEach(Dato => crearDatoHtml(Dato));


