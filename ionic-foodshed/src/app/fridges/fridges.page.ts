import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fridges',
  templateUrl: './fridges.page.html',
  styleUrls: ['./fridges.page.scss'],
})
export class FridgesPage implements OnInit {

  constructor(private localStorage: LocalstorageService, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  temp() {
    this.localStorage.helloWorld();
  }

}
