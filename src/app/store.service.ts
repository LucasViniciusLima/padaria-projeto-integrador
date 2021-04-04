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
    console.log(this.getOneRequest("1TXqP6fTaMvA0IxtdISB"));
  }

  addRequest() {
    //this.store.collection('pedido').add({obj});
  }
  changeRequestStatus(id: string) {
    this.requestsRef.doc(id).update({ "finalizado": true });
  }
  getAllRequests() {
    this.requestsRef.get().toPromise().then((querySnapshot) => { querySnapshot.forEach((doc) => { this.requestList.push(doc.data()); }); });
  }
  getOneRequest(id: string) {
    this.requestsRef.doc(id).get().toPromise().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else { console.log("No such document!"); }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
    return null;
  }

}

