import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { TicketItem } from 'src/app/models/ticketItem';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})

export class TicketComponent {

    formulario: FormGroup
    ticket: Ticket = new Ticket(0, 0) //cabecera de compra
    items: TicketItem[] = [] //array de items de compra

    constructor(private fb: FormBuilder, private srv: TicketService) {
        this.formulario = this.fb.group({
            cliente_id: ['', Validators.required],
            items: this.fb.array([])
        })
    }

    get array_items(): FormArray {
        return this.formulario.get('items') as FormArray
    }

    newItem(): FormGroup {
        return this.fb.group({
            ticketid: [''],
            articulo_id: ['', Validators.required],
            precio: ['', Validators.required],
            cantidad: ['', Validators.required]
        })
    }

    addItem():void {
        if (this.formulario.valid) {
            this.array_items.push(this.newItem())
        } else {
            console.warn('Falta completar campos')
        }
    }

    removeItem(i: number):void {
        this.array_items.removeAt(i)
    }

    calcularTotal(): number {
        let total = 0
        for (let i = 0; i < this.array_items.controls.length; i++) {
            total += this.array_items.controls[i].get("cantidad")?.value *
                this.array_items.controls[i].get("precio")?.value
        }
        return total
    }

    onSubmit():void {
        if (this.formulario.valid) {
            this.ticket.cliente_id = this.formulario.controls['cliente_id'].value
            this.ticket.total = this.calcularTotal()

            //salvar cabecera ticket
            this.srv.insert(this.ticket).subscribe({
                next: (v) => {

                    //obtener id ticket de cabecera salvado -> v.id, y completar items detalle
                    //para su clave foránea
                    for (let i = 0; i < this.array_items.controls.length; i++) {
                        let item = new TicketItem(
                            v.id as number,
                            this.array_items.controls[i].get("articulo_id")?.value,
                            this.array_items.controls[i].get("cantidad")?.value,
                            this.array_items.controls[i].get("precio")?.value
                        )
                        this.items.push(item)
                    }

                    //salvar ticket detalle
                    this.srv.insert_items(this.items).subscribe({
                        next: (x) => {

                        }
                    })
                }
            })
        }
        else {
            console.warn('Falta completar campos')
        }
    }
}
