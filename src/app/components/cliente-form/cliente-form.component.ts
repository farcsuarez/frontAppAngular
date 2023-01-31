import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

    cliente: Cliente = new Cliente('', '')
    action: string = ''//alta-modif
    id: number | undefined = 0
    add: boolean = false
    upd: boolean = false
    del: boolean = false

    constructor(private srv: ClienteService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
        this.action = String(this.route.snapshot.paramMap.get('accion'))
        
        switch (this.action) {
            case 'add': {
                this.add = true
                break
            }
            case 'upd': {
                this.upd = true
                this.fillForm(this.id)
                break
            }
            case 'del': {
                this.del = true
                this.fillForm(this.id)
            }
        }
    }

    fillForm(id: number) {
        this.srv.findOne(id).subscribe({
            next: (v) => {
                this.cliente.fullname = v.fullname
                this.cliente.email = v.email
            },
            error: (e) => console.log(e),
            // complete: () => console.info('complete findOne')
        })
    }

    onSubmit() {
        if (this.action == 'add') {
            this.srv.insert(this.cliente).subscribe({
                next: (v) => this.router.navigate(['/clientes']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }

        if (this.action == 'upd') {
            this.srv.updateById(this.id, this.cliente).subscribe({
                next: (v) => this.router.navigate(['/clientes']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }

        if (this.action == 'del') {
            this.srv.deleteById(this.id).subscribe({
                next: (v) => this.router.navigate(['/clientes']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }
    }
}
