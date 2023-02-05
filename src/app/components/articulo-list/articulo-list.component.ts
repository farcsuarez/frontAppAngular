import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
    selector: 'app-articulo-list',
    templateUrl: './articulo-list.component.html',
    styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent {
    lista: Articulo[] = []
    unico?: Articulo

    constructor(private srv: ArticuloService, private router: Router) { }

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
