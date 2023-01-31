import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    URL: string = "http://localhost:8080/clientes"

    constructor(private http: HttpClient) { }

    findAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${this.URL}`)
    }

    findOne(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.URL}/${id}`)
    }

    findLike(name: string): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${this.URL + '/like'}/${name}`)
    }

    insert(c: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`${this.URL}`, c)
    }

    deleteById(id: number | undefined): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`)
    }

    updateById(id: number | undefined, c: Cliente): Observable<any> {
        return this.http.put(`${this.URL}/${id}`, c)
    }
}
