import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoDetalleViewModel } from '../shared/models/view-models/pedido-detalle.model';
import { PedidoService } from '../shared/services/pedido.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  int_DetalleId: number = 0;
  obj_PedidoDetalle: PedidoDetalleViewModel = new PedidoDetalleViewModel();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pedidoService: PedidoService
    ) { }

  ngOnInit() {
    this.fn_Iniciar();
  }

  fn_Iniciar(){
    this.route.params.subscribe(params => {
      this.int_DetalleId = params['id'];
      this.pedidoService.fn_ObtenerPedidoDetalle(this.int_DetalleId).subscribe((res: any[]) => {
        console.log(res[0]);
        if(res.length > 0)
          this. obj_PedidoDetalle = res[0];
      },(error) => {
        console.log(error);
      });
    });
  }
}
