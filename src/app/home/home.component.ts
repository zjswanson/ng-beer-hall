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

  taps;
  selectedTap: Tap;


  constructor( private tapService: TapService ) { }


  ngOnInit(): void {
    this.taps = this.tapService.getTaps().subscribe(result => {this.taps = result});
    // this.selectedTap.subscribe(result => {this.selectedTap = result})
  }

  onSelect(tap: Tap): void {
    this.selectedTap = tap;
  }


  sellPint(tap: Tap): void {
    this.tapService.updateTap(tap);
    this.selectedTap = tap;
  }

  submitForm(newTap: Tap) {
    this.tapService.addTap(newTap);
  }

  updateTap(tap:Tap) {
    this.tapService.updateTap(tap);
  }

}
