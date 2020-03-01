import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-fridges',
  templateUrl: './fridges.page.html',
  styleUrls: ['./fridges.page.scss'],
})
export class FridgesPage implements OnInit {

  items: any;

  constructor(private localStorage: LocalstorageService) {
    this.items = ['Fridge 1', 'Fridge 2', 'Fridge 3', 'Fridge 4'];
  }

  ngOnInit() {
  }

  printInfo(fridgeNum: number) {
    console.log('fridge ' + fridgeNum + ' info');
  }
}
