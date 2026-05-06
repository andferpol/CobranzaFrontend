import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({ providedIn: 'root' })
export class Convenios {
  private apiUrl = `${API_BASE_URL}/convenios`;

  constructor(private http: HttpClient) {}

  registrarIntencionPago(convenio: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/intencion-pago`, convenio, { responseType: 'text' });
  }
}
