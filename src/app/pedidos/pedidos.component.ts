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
    
  }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(){
    this.store.getAllRequests();
    this.pedidos = this.store.requestList;
  }


}
