import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class Operaciones {
  private apiUrl = `${API_BASE_URL}/operaciones`;

  constructor(private http: HttpClient) {}

  getMayorMora(codigoCliente: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/mayor-mora/${codigoCliente}`);
  }

  getResumenOperaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/resumen`);
  }

  inactivarOperaciones(): Observable<any> {
    return this.http.put(`${this.apiUrl}/inactivar`, {}, { responseType: 'text' });
  }
}
