import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  // Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the default is that exact ordering.
  constructor(public storage: Storage, private http: HTTP, public alertController: AlertController) { }

  testing() {
    // let a: string;
    // let b: string;
    // let c: string;

    // this.http.get('http://httpbin.org/ip', {}, {})
    //   .then(data => {
    //     a = '' + data.status;
    //     b = '' + data.data;
    //     c = '' + data.headers;
    //     console.log(data.status);
    //     console.log(data.data); // data received by server
    //     console.log(data.headers);
    //     // return '' + data.status + '\n' + data.data + '\n' + data.headers;
    //     return 'helloWorld';
    //   })
    //   .catch(error => {
    //     console.log(error.status);
    //     console.log(error.error); // error message as string
    //     console.log(error.headers);
    //     // return '' + error.status + '\n' + error.error + '\n' + error.headers;
    //     return 'helloWorld';
    //   });

    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        // console.log(data.status);
        // console.log(data.data); // data received by server
        // console.log(data.headers);

        this.presentAlert(('' + data.status));

      })
      .catch(error => {

        // console.log(error.status);
        // console.log(error.error); // error message as string
        // console.log(error.headers);

        this.presentAlert(error.error);

      });
  }

  formatDate(key) {
    const date = [];
    date[0] = key.substring(4).split(' ')[0].split('-');
    date[1] = key.substring(4).split(' ')[1].split(':');
    return date;
  }

  // store a value
  store() {
    const selectedDate = new Date().toISOString();
    console.log(selectedDate);
    this.storage.set(selectedDate, {
      name: 'Avery',
      age: 18
    });
  }

  //
  printStored() {
    console.log('====');
    this.storage.forEach((value, key) => {
      console.log('key: ' + key + ' value: ' + value);
    });
  }

  // remove a single key value:
  remove(key: string) {
    this.storage.remove(key);
  }

  //  delete all data from your application:
  clear() {
    this.storage.clear();
  }

  quickfix() {
    return this.storage;
  }

  log(name: string, value: string) {
    this.storage.set(name, value);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'alertmsg: ' + msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
