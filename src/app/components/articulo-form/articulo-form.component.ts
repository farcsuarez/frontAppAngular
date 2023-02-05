import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
    selector: 'app-articulo-form',
    templateUrl: './articulo-form.component.html',
    styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent {
    articulo: Articulo = new Articulo('', 0.0)
    action: string = ''//alta-modif
    id: number | undefined = 0
    add: boolean = false
    upd: boolean = false
    del: boolean = false

    constructor(private srv: ArticuloService, private router: Router, private route: ActivatedRoute) { }

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
                this.articulo.detalle = v.detalle
                this.articulo.precio = v.precio
            },
            error: (e) => console.log(e),
            // complete: () => console.info('complete findOne')
        })
    }

    onSubmit() {
        if (this.action == 'add') {
            this.srv.insert(this.articulo).subscribe({
                next: (v) => this.router.navigate(['/articulos']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }

        if (this.action == 'upd') {
            this.srv.updateById(this.id, this.articulo).subscribe({
                next: (v) => this.router.navigate(['/articulos']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }

        if (this.action == 'del') {
            this.srv.deleteById(this.id).subscribe({
                next: (v) => this.router.navigate(['/articulos']),
                error: (e) => console.log(e),
                // complete: () => console.info('complete')
            })
        }
    }
}
