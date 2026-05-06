import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({
  providedIn: 'root',
})
export class Clientes {  
  private apiUrl = `${API_BASE_URL}/clientes`;

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  actualizarTipoIdentificacion(id: number, nuevoTipo: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/tipo-identificacion`, nuevoTipo);
  }
}
