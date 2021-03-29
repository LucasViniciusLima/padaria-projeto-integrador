import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  pedidos: Array<any>;


  constructor(private store: StoreService) { 
    this.pedidos = this.store.requestList;
  }

  ngOnInit(): void {
  }


}
