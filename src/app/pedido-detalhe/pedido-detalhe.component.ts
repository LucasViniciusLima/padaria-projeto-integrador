import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from  '@angular/router';
import { StoreService } from '../store.service';
import { NotifyAPIService } from '../notify-api.service';

@Component({
  selector: 'pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.css']
})
export class PedidoDetalheComponent implements OnInit {

  id: any;
  pedidos: Array<any>;
  totalPagar: number = 0;

  constructor(private route: ActivatedRoute, private store: StoreService, private notify: NotifyAPIService) { 
    this.route.params.subscribe( id => {      
      this.id = id['parametro'];
    });    
  }

  ngOnInit(): void {
    this.store.getItems().subscribe(items => { this.pedidos = items }); 
  }

  changeStatus(id: string, newStatus: boolean){
    this.store.completeRequest(id,newStatus);
    //this.notify.chamarAPI(newStatus);// lembrar de ativar depois
  }

  getTotalPagar(){
    return this.totalPagar;
  }
}
