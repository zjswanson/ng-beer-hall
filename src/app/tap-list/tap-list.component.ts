import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Tap } from './../tap';
import { TapService } from './../tap.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent implements OnInit {
  taps: FirebaseListObservable<any[]>;
  selectedTap: Tap;
  @Output() clickSender = new EventEmitter();

  constructor(private tapService: TapService) { }

  onSelect(tap: Tap): void {
    this.clickSender.emit(tap);
    this.selectedTap = tap;
  }


  ngOnInit() {
    this.taps = this.tapService.getTaps();
  }

}
