import { Component, OnInit } from '@angular/core';

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

  constructor(private tapService: TapService) { }

  onSelect(tap: Tap): void {
    this.selectedTap = tap;
  }

  ngOnInit() {
    this.taps = this.tapService.getTaps();
  }

}
