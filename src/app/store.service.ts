import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  pedidosRef = this.store.collection('pedido');
  requestList: Array<any> = [];

  constructor(private store: AngularFirestore) {
    this.pedidosRef.get().toPromise().then((querySnapshot) => { querySnapshot.forEach((doc) => {this.requestList.push(doc.data());});});
  }

  addPedido(){
    //this.store.collection('pedido').add({obj});
  }
}

