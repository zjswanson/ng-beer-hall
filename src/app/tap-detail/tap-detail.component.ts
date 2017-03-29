import { Component, OnInit, Input } from '@angular/core';

import { Tap } from './../tap';
import { TapService } from './../tap.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-tap-detail',
  templateUrl: './tap-detail.component.html',
  styleUrls: ['./tap-detail.component.css']
})
export class TapDetailComponent implements OnInit {

  @Input() selectedTap: Tap;
  
  constructor() { }

  ngOnInit() {
  }

}
