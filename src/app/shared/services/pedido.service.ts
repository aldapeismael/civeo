import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public http: HttpClient) { }

  fn_ObtenerListaMiPlantilla(str_Telefono:string) {
    // return this.http.get(environment.apiURL + 'Plaza/MiPlantilla/?);
    return this.http.get(environment.apiURL + 'Clientes/getPedidos?telefono='+ str_Telefono);
  }

  fn_ObtenerPedidoDetalle(int_DetalleId:number) {
    // return this.http.get(environment.apiURL + 'Plaza/MiPlantilla/?);
    return this.http.get(environment.apiURL + 'Clientes/getPedido?detalleId='+ int_DetalleId);
  }
}
