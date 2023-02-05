import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { TicketItem } from '../models/ticketItem';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    URL: string = "http://localhost:8080/tickets"
    URLdetails: string = "http://localhost:8080/ticketitems"

    constructor(private http: HttpClient) { }

    findAll(): Observable<Ticket[]> {
        return this.http.get<Ticket[]>(`${this.URL}`)
    }

    findOne(id: number): Observable<Ticket> {
        return this.http.get<Ticket>(`${this.URL}/${id}`)
    }

    insert(c: Ticket): Observable<Ticket> {
        return this.http.post<Ticket>(`${this.URL}`, c)
    }

    insert_items(c: TicketItem[]): Observable<TicketItem[]> {
        return this.http.post<TicketItem[]>(`${this.URLdetails}`, c)
    }

    deleteById(id: number | undefined): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`)
    }

    updateById(id: number | undefined, c: Ticket): Observable<any> {
        return this.http.put(`${this.URL}/${id}`, c)
    }
}
