import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clientes } from '../../services/clientes';
import { Operaciones } from '../../services/operaciones';
import { Convenios } from '../../services/convenios';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  clientes: any[] = [];
  resumenOperaciones: any[] = [];
  mensajeConvenio: string = '';

  constructor(
    private clientesService: Clientes,
    private operacionesService: Operaciones,
    private conveniosService: Convenios
  ) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe((data: any) => this.clientes = data);
    this.operacionesService.getResumenOperaciones().subscribe((data: any) => this.resumenOperaciones = data);
  }

  registrarConvenio() {
    const convenio = {
      codigoCliente: 1,
      montoPropuesto: 100,
      fechaIntencion: new Date(),
      observaciones: 'Pago parcial'
    };
    this.conveniosService.registrarIntencionPago(convenio).subscribe((resp: any) => {
      this.mensajeConvenio = resp;
    });
  }

  inactivarOperaciones() {
    this.operacionesService.inactivarOperaciones().subscribe((resp: any) => {
      alert(resp);
    });
  }
}
