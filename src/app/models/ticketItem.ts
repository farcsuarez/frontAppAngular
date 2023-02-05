export class TicketItem {
    id?: number
    ticketid?: number
    articuloid: number
    cantidad: number
    preciounit: number

    constructor(ticketid: number, articuloid: number, cantidad: number, preciounit: number) {
        this.ticketid = ticketid
        this.articuloid = articuloid,
        this.cantidad = cantidad,
        this.preciounit = preciounit
    }
}