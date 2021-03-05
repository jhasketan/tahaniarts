import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private masterDataCollection: AngularFirestoreCollection;
  private masterDataLatest: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private masterDataTypes: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private firestore: AngularFirestore) {
    this.masterDataCollection = this.firestore.collection('masterData');
  }
  
  getMaster() {
    this.masterDataCollection.valueChanges().subscribe((res) => {
      console.log('master data-->', res);
      if (res) {
        this.masterData = res;
      } else {
        this.masterData = [];
      }
    });
    this.masterDataCollection
      .doc('master_types')
      .valueChanges()
      .subscribe((res) => {
        if (res) {
          console.log('--master types--', res);
          this.masterTypes = res;
        } else {
          this.masterTypes = [];
        }
      });
  }

  filterMasterDataByType(type: string) {
    const filteredItems = this.masterDataLatest
      .getValue()
      .filter((each: any) => each.type === type)
      .map((each: any) => {
        return { id: each.id, name: each.name };
      });
    return filteredItems;
  }

  get masterData() {
    return this.masterDataLatest.asObservable();
  }

  set masterData(value: any) {
    this.masterDataLatest.next(value);
  }

  get masterTypes() {
    return this.masterDataTypes.asObservable();
  }

  set masterTypes(value: any) {
    this.masterDataTypes.next(value);
  }
}
