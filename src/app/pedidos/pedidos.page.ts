import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoViewModel } from '../shared/models/view-models/pedido.model';
import { PedidoService } from '../shared/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  str_Telefono: string = "";
  listaPedidos: PedidoViewModel[] = [];

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
      this.str_Telefono = params['id'];
        this.pedidoService.fn_ObtenerListaMiPlantilla(this.str_Telefono).subscribe((res: any[]) => {
          console.log(res);
          this.listaPedidos = res;
        },(error) => {
          console.log(error);
        });
    });
  }
}