//import { FormsModule } from '@angular/forms';
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
    this.store.getItems().subscribe(items => { this.pedidos = items; }); 
    console.log(this.getUserName("7FZpWJ14DAhVyq2CI33jCxWuhty1"));   
  }

  changeStatus(id: string, newStatus: boolean){
    this.store.completeRequest(id,newStatus);
  }

  getUserName(id:string){
    this.store.getUser(id).subscribe(item=>{
      return item;
    });
  }
}
