import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ListTaksService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(`${API_BASE}/tareas`);
  }

  create(data: any){
    return this.http.post(`${API_BASE}/tareas`, data);
  }

  update(id: number, cliente: any){
    return this.http.put(`${API_BASE}/tareas/${id}`, cliente)
  }

  delete(id: number){
    return this.http.delete(`${API_BASE}/tareas/${id}`)
  }
}
