import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private masterDataCollection:AngularFirestoreCollection;
  constructor(private firestore:AngularFirestore) { 
    this.masterDataCollection = this.firestore.collection('masterData');
  }
  getMaster(){
    return this.masterDataCollection.valueChanges();
  }
}
