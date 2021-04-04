import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  requestsRef = this.store.collection('pedido');
  requestList: Array<any> = [];

  constructor(private store: AngularFirestore) {
    
  }

  addRequest(){
    //this.store.collection('pedido').add({obj});
  }
  completeRequestById(id: string){
    this.requestsRef.doc(id).update({"finalizado": true});
  }
  getAllRequests(){
    this.requestsRef.get().toPromise().then((querySnapshot) => { querySnapshot.forEach((doc) => {this.requestList.push(doc.data());});});
  }
}

