import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-fridges',
  templateUrl: './fridges.page.html',
  styleUrls: ['./fridges.page.scss'],
})
export class FridgesPage implements OnInit {

  constructor(private localStorage: LocalstorageService) { }

  ngOnInit() {
  }

  printInfo(fridgeNum: number) {
    console.log('fridge ' + fridgeNum + ' info');
  }
}