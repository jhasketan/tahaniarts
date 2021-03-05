import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private readonly paintingCollection : AngularFirestoreCollection;
  constructor(private firestore:AngularFirestore) {
    this.paintingCollection = this.firestore.collection('paintings');
  }

  getList(){
    return this.paintingCollection.snapshotChanges();
  }

  getById(id : string){
    return this.paintingCollection.doc(id).valueChanges();
  }

  add(data : any){
    return this.paintingCollection.add(data);
  }

  update(data : any, id : string ){
    return this.paintingCollection.doc(id).update(data);
  }

  delete(id :string){
    return this.paintingCollection.doc(id).delete();
  }
}
