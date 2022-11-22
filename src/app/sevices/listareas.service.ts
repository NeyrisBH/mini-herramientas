import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tareas } from '../models/tareas.model';
import { Observable } from 'rxjs';

const API_BASE = 'http://localhost:8080/api/tareas'

@Injectable({
  providedIn: 'root'
})
export class ListareasService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Tareas[]> {
    return this.http.get<Tareas[]>(API_BASE);
  }

  getId(id: any): Observable<Tareas> {
    return this.http.get<Tareas>(`${API_BASE}/${id}`);
  }

  create(data: any) {
    return this.http.post(API_BASE, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_BASE}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_BASE}/${id}`);
  }

  findByDescripcion(descripcion: any): Observable<Tareas[]> {
    return this.http.get<Tareas[]>(`${API_BASE}?descripcion=${descripcion}`)
  }
}
