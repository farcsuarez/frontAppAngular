import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent {
    lista: Cliente[] = []
    unico?: Cliente

    constructor(private srv: ClienteService, private router: Router) {

    }


    delete(id: number | undefined) {
        this.srv.deleteById(id).subscribe(r => {
            this.getAll()
        })
    }

    getAll() {
        this.srv.findAll().subscribe({
            next: (v) => this.lista = v,
            error: (e) => console.log(e),
            //complete: () => console.info('complete findAll')
        })
    }

    getOne(id: number) {
        this.srv.findOne(id).subscribe({
            next: (v) => this.unico = v,
            error: (e) => console.log(e),
            //complete: () => console.info('complete findOne')
        })
    }

    getLike(name: string) {
        if (name == '') {
            this.getAll();
        } else {
            this.srv.findLike(name).subscribe({
                next: (v) => this.lista = v,
                error: (e) => console.log(e),
                //complete: () => console.info('complete findOne')
            })
        }
    }

    ngOnInit(): void {
       this.getAll();
    }
}

