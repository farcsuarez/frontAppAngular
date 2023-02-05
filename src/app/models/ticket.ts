export class Ticket {
    id?: number
    cliente_id: number
    fecha?: Date
    total: number

    constructor(cliente_is: number, total: number) {
        this.cliente_id = cliente_is,
        this.total = total
    }
}
