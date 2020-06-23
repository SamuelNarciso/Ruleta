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

}