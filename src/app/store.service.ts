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
    //tente ao maximo nomear isso certo
    this.tasks = this.tasksCollection.snapshotChanges().pipe(
      map(tarefasCollection => {
        return tarefasCollection.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      map(tarefas => {
        tarefas.map(item => {
          this.getSchedule(item.idCliente).then(data => {
            var cliente = data as any;
            item.nomeCliente = cliente.nome;
          });
        })
        console.table(tarefas);
        return tarefas;
      })
    );
    console.table(this.tasks);
  }

  getItems() {
    return this.tasks;
  }

  completeRequest(id: string, newStatus: boolean) {
    this.store.collection('pedido').doc(id).update({ "finalizado": newStatus });
  }

  getSchedule(id: string) {
    return this.store
      .collection("usuario")
      .doc(id)
      .ref.get()
      .then(function (doc) {
        return doc.data();
      });
  }


}

