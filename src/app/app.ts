import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clientes } from './services/clientes';
import { Operaciones } from './services/operaciones';
import { Convenios } from './services/convenios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages/dashboard/dashboard.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

clientes: any[] = [];
resumenOperaciones: any;
mensajeConvenio: any;

  constructor(
    private clientesService: Clientes, 
    private operacionesService: Operaciones,
    private conveniosService: Convenios,
    private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
      this.cd.detectChanges();
    });

    // 🔹 Cargar resumen de operaciones
    this.operacionesService.getResumenOperaciones().subscribe((data: any) => {
      this.resumenOperaciones = data;
      this.cd.detectChanges();
    });
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
      this.cd.detectChanges();
    });
  }

  // 🔹 Inactivar operaciones
  inactivarOperaciones() {
    this.operacionesService.inactivarOperaciones().subscribe((resp: any) => {
      alert(resp);
    });
  }
}
