import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
    providedIn: 'root'
})

export class ArticuloService {
    URL: string = "http://localhost:8080/articulos"

    constructor(private http: HttpClient) { }

    findAll(): Observable<Articulo[]> {
        return this.http.get<Articulo[]>(`${this.URL}`)
    }

    findOne(id: number): Observable<Articulo> {
        return this.http.get<Articulo>(`${this.URL}/${id}`)
    }

    findLike(name: string): Observable<Articulo[]> {
        return this.http.get<Articulo[]>(`${this.URL + '/like'}/${name}`)
    }

    insert(c: Articulo): Observable<Articulo> {
        return this.http.post<Articulo>(`${this.URL}`, c)
    }

    deleteById(id: number | undefined): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`)
    }

    updateById(id: number | undefined, c: Articulo): Observable<any> {
        return this.http.put(`${this.URL}/${id}`, c)
    }
}
