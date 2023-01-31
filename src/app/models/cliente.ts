export class Cliente {
    id?: number
    fullname: string
    email: string

    constructor(nombre: string, email: string) {
        this.fullname = nombre,
            this.email = email
    }
}
