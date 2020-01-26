import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  // Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the default is that exact ordering.
  constructor(public storage: Storage) { }

  helloWorld() {
    console.log('Hello World!');
  }

  log(name: string, value: string) {
    this.storage.set(name, value);
  }
}
