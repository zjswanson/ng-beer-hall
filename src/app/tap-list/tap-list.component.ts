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
  @Output() pintClickSender = new EventEmitter();

  constructor() { }

  onSelect(tap: Tap): void {
    this.clickSender.emit(tap);
    this.selectedTap = tap;
  }

  sellPint(tap: Tap): void {
    tap.pintsRemaining -= 1;
    this.pintClickSender.emit(tap)
  }

  priorityColor(remainingPints){
    if (remainingPints <= 25){
      return "bg-danger";
    } else if (remainingPints <= 75) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }


  ngOnInit() {

  }

}
