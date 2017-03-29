import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tap } from './../tap';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent implements OnInit {
  @Input() taps: Tap[];
  selectedTap: Tap;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  onSelect(tap: Tap): void {
    this.clickSender.emit(tap);
    this.selectedTap = tap;
  }


  ngOnInit() {

  }

}
