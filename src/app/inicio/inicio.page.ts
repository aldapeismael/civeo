import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioViewModel } from '../shared/models/view-models/inicio.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  obj_Inicio: InicioViewModel = new InicioViewModel();
  constructor(
  ) { }

  ngOnInit() {

  }

}
