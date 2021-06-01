import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pedidos: Array<any> = new Array<any>();
  currentDate: Date = new Date();


  constructor(private store: StoreService) {
    this.store.getItems().subscribe(items => {
      this.pedidos = items;    
    });
  }

  /**
  [■,■,■,■].map(■→●) ⇒ [●,●,●,●]
  [■,●,■,▲].filter(■→true) ⇒ [■,■]
  [■,●,■,▲].find(●→true) ⇒ ●
  [■,●,■,▲].findIndex(●→true) ⇒ 1
  [■,●,■,▲].fill(●) ⇒ [●,●,●,●]
  [■,●,■,▲].some(●→true) ⇒ true
  [■,●,■,▲].every(●→true) ⇒ false
   */

  ngOnInit(): void {    
  }

  quantidadeTotal() {
    return this.pedidos?.length;
  }

  calcularTotalPedido(pedidoItens: Array<any>) {
    var total = 0;
    for (let i = 0; i < pedidoItens.length; i++) {
      total += pedidoItens[i].preco;
    }
    return total;
  }

  totalGanho() {
    var total = 0;
    for (let i = 0; i < this.quantidadeTotal(); i++) {
      total += this.calcularTotalPedido(this.pedidos[i].itens);
    }
    return total;
  }

  verificarDataHoje(id: number) {
    if (this.pedidos[id].data.getDate() == this.currentDate.getDate()) return true;
    else return false;
  }

  calcularPedidosHoje() {
    var total = 0;

    for (let i = 0; i < this.quantidadeTotal(); i++) {
      if (this.verificarDataHoje(i)) total++;
    }
    return total;
  }
  

  calcularPedidosCompletosHoje() {
    var total = 0;

    for (let i = 0; i < this.quantidadeTotal(); i++) {
      if (this.verificarDataHoje(i) && this.pedidos[i].finalizado) total++;
    }

    return total;
  }

  calcularTotalGanhoHoje() {
    var total = 0;
    for (let i = 0; i < this.quantidadeTotal(); i++) {
      if (this.verificarDataHoje(i) && this.pedidos[i].finalizado) total += this.calcularTotalPedido(this.pedidos[i].itens);
    }
    return total;
  }
}
