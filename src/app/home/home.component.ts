import { Component, OnInit } from '@angular/core';

import { Tap } from './../tap';
import { TapService } from './../tap.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taps: FirebaseListObservable<any[]>;
  selectedTap: Tap;


  constructor( private tapService: TapService ) { }


  ngOnInit(): void {
    this.taps = this.tapService.getTaps();
  }

  onSelect(tap: Tap): void {
    this.selectedTap = tap;
  }


  sellPint(): void {

  }

  submitForm(newTap: Tap) {
    this.tapService.addTap(newTap);
  }

  updateTap(tap:Tap) {
    this.tapService.updateTap(tap);
  }

}
