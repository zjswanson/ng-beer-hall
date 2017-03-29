import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Tap } from './../tap';

@Component({
  selector: 'app-tap-add',
  templateUrl: './tap-add.component.html',
  styleUrls: ['./tap-add.component.css']
})
export class TapAddComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, brand: string, price: string, alcoholContent: number){
    var newTap = new Tap(name, brand, price, alcoholContent);
    this.clickSender.emit(newTap);
  }

}
