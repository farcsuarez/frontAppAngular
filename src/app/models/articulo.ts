export class Articulo {
    id?: number
    detalle: string
    precio: number

    constructor(detalle: string, precio: number) {
        this.detalle = detalle,
            this.precio = precio
    }
}
