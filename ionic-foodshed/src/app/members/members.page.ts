import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular'
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';

import { finalize } from 'rxjs/operators';

const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  fridge1:string="assets/fridge_images/fridge1.jpg";
  fridge2:string="assets/fridge_images/fridge2.jpg";
  fridge3:string="assets/fridge_images/fridge3.jpg";
  fridge4:string="assets/fridge_images/fridge4.jpg";

  status1:string="Empty";
  status2:string="Full";
  status3:string="Full";
  status4:string="Empty";

  fridge_num:number = 0;

  // images = [];

  constructor(private camera:Camera, private file: File, private webview: WebView, private actionSheetController: ActionSheetController, private toastController: ToastController, private storage: Storage, private plt: Platform, private loadingController: LoadingController, private ref: ChangeDetectorRef, private filePath: FilePath) { }

  ngOnInit() {
  }

  updatePicture(fridge: number) {
    this.fridge_num = fridge;
    this.selectImage();
  }

  updateStatus(fridge: number) {
    this.fridge_num = fridge;
    this.selectStatus();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });
 
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }
 
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        //unsure if this is needed
        //this.updateStoredImages(newFileName);
        this.changePic(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  changePic(newName:string) {
    if (this.fridge_num == 1) {
      this.fridge1 = newName;
    }
    else if (this.fridge_num == 2) {
      this.fridge2 = newName;
    }
    else if (this.fridge_num == 3) {
      this.fridge3 = newName;
    }
    else if (this.fridge_num == 4) {
      this.fridge4 = newName;
    }
  }

  //unsure if this is needed
  // pathForImage(img) {
  //   if (img === null) {
  //     return '';
  //   }
  //   else {
  //     let converted = this.webview.convertFileSrc(img);
  //     return converted;
  //   }
  // }
 
  //unsure if this is needed
  // updateStoredImages(name) {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //       let arr = JSON.parse(images);
  //       if (!arr) {
  //           let newImages = [name];
  //           this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
  //       } else {
  //           arr.push(name);
  //           this.storage.set(STORAGE_KEY, JSON.stringify(arr));
  //       }
 
  //       let filePath = this.file.dataDirectory + name;
  //       let resPath = this.pathForImage(filePath);
 
  //       let newEntry = {
  //           name: name,
  //           path: resPath,
  //           filePath: filePath
  //       };
 
  //       this.images = [newEntry, ...this.images];
  //       this.ref.detectChanges(); // trigger change detection cycle
  //   });
  // }

  async selectStatus() {
    const actionSheet = await this.actionSheetController.create({
        header: "Fridge is...",
        buttons: [{
                text: 'Full',
                handler: () => {
                  this.changeStatus("Full");
                  //present send notification option
                }
            },
            {
                text: 'Empty',
                handler: () => {
                  this.changeStatus("Empty");
                  //present send notification option
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }

  changeStatus(newStatus:string) {
    if (this.fridge_num == 1) {
      this.status1 = newStatus;
    }
    else if (this.fridge_num == 2) {
      this.status2 = newStatus;
    }
    else if (this.fridge_num == 3) {
      this.status3 = newStatus;
    }
    else if (this.fridge_num == 4) {
      this.status4 = newStatus;
    }
  }

}


