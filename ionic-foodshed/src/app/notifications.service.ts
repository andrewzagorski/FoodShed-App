import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  platform: any;
  isAndroid = this.platform.is('android'); // not sure that this will work

  constructor(private localNotifications: LocalNotifications) {

    const key = 'stuff';

    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: this.isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
      data: { secret: key }
    });

    // Schedule multiple notifications
    // this.localNotifications.schedule([{
    //   id: 1,
    //   text: 'Multi ILocalNotification 1',
    //   sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
    //   data: { secret: key }
    // }, {
    //   id: 2,
    //   title: 'Local ILocalNotification Example',
    //   text: 'Multi ILocalNotification 2',
    //   icon: 'http://example.com/icon.png'
    // }]);


    // Schedule delayed notification
    // this.localNotifications.schedule({
    //   text: 'Delayed ILocalNotification',
    //   trigger: { at: new Date(new Date().getTime() + 3600) },
    //   led: 'FF0000',
    //   sound: null
    // });
  }
}
