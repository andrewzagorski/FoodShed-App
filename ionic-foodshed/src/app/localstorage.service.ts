import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  // Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the default is that exact ordering.
  constructor(public storage: Storage, private http: HTTP) { }

  helloWorld() {
    console.log('Hello World!');
    this.http.get('http://httpbin.org/ip', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        return data.status + '\n' + data.data + '\n' + data.headers;

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
        return error.status + '\n' + error.error + '\n' + error.headers;

      });
  }

  log(name: string, value: string) {
    this.storage.set(name, value);
  }
}
