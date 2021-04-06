import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  tasksCollection: AngularFirestoreCollection<any>;
  userDoc: AngularFirestoreDocument<any>;
  tasks: Observable<any[]>;
  
  constructor(private store: AngularFirestore) {
    this.tasksCollection = this.store.collection('pedido', ref => ref.orderBy('data').limit(30));
        
    this.tasks = this.tasksCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  
  getItems(){
    return this.tasks;
  }

  completeRequest(id: string, newStatus: boolean) {
    this.store.collection('pedido').doc(id).update({ "finalizado": newStatus});
  }

  getUser(id: string){
    this.userDoc = this.store.collection('usuario').doc(id);
    return this.userDoc.valueChanges();
  }
  
}

