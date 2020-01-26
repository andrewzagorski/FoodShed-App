import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FridgeInfoPage } from './fridge-info.page';

const routes: Routes = [
  {
    path: '',
    component: FridgeInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FridgeInfoPage]
})
export class FridgeInfoPageModule {}
