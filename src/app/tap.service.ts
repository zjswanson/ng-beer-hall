// This defines our hero.service used in components
import { Injectable } from '@angular/core';
// imports hero class definition
import { Tap } from './tap';
import { TAPS } from './mock-taps';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()

export class TapService {
  taps: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.taps = angularFire.database.list('taps');
  }

  getTaps() {
    return this.taps;
  }

}
