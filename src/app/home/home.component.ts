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
  editOpen: boolean = false;

  constructor( private tapService: TapService ) { }


  ngOnInit(): void {
    this.taps = this.tapService.getTaps();
  }

  onSelect(tap: Tap): void {
    this.selectedTap = tap;
  }

  showEdit(): void {
    this.editOpen = true;
  }

  saveEdit(): void {
    this.editOpen = false;
  }

  sellPint(): void {

  }

  addTap(): void {

  }

}
