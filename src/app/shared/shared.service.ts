import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private storage: AngularFireStorage) { }
  uploadFile(file : any, filePath : string) : Promise<string>{
    return new Promise((resolve, reject)=>{
      let fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, file).then(uploadRes=>{
        fileRef.getDownloadURL().subscribe(urlQueryRes=>{
          console.log('res-->', urlQueryRes);
          resolve(urlQueryRes);
        },err=>{
          reject();
        })
      })
      .catch(err=>{
        console.error('--error while uploading', err);
        reject();
      })
    })
  }

  deleteFile(filePath : string){
    filePath = this.removeParam('token',filePath);
    return this.storage.refFromURL(filePath).delete();
  }

  removeParam(key: string, sourceURL: any) {
    var rtn = sourceURL.split('?')[0],
      param,
      params_arr = [],
      queryString =
        sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';
    if (queryString !== '') {
      params_arr = queryString.split('&');
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
        param = params_arr[i].split('=')[0];
        if (param === key) {
          params_arr.splice(i, 1);
        }
      }
      if (params_arr.length) rtn = rtn + '?' + params_arr.join('&');
    }
    return rtn;
  }
}
