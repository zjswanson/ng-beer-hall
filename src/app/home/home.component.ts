import { Component, OnInit } from '@angular/core';

import { Tap } from './../tap';
import { TapService } from './../tap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taps: Tap[];
  selectedTap: Tap;
  editOpen: boolean = false;

  constructor( private tapService: TapService ) { }

  getTaps(): void {
    this.tapService.getTaps().then(taps => this.taps = taps);
  }

  ngOnInit(): void {
    this.getTaps();
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
