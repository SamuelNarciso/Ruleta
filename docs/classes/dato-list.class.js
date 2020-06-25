export class DatoList {

    constructor() {
        this.datos = [];
    }

    nuevoDato(dato) {
        this.datos.push(dato);
    }

    eliminarDato(id) {
        this.datos = this.datos.filter(dato => dato.id != id);

    }

    seleccionarAzar() {
        let valorAleatorio = Math.floor(Math.random() * (0, (this.datos.length )));
    return valorAleatorio;
    }

}