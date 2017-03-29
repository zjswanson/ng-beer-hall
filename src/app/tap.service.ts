// This defines our hero.service used in components
import { Injectable } from '@angular/core';
// imports hero class definition
import { Tap } from './tap';
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

  addTap(newTap: Tap): void {
    this.taps.push(newTap);
  }

  getTapById(tapId: string) {
    return this.angularFire.database.object('/taps/' + tapId);
  }

  updateTap(tapToEdit) {
    console.log(tapToEdit);
    console.log(tapToEdit.$key);
    console.log(tapToEdit.id);
    var tapEntryInDatabase = this.getTapById(tapToEdit.$key);
    console.log(tapEntryInDatabase);
    tapEntryInDatabase.update({ name: tapToEdit.name,
                                brand: tapToEdit.brand,
                                price: tapToEdit.price,
                                alcoholContent: tapToEdit.alcoholContent,
                                pintsRemaining: tapToEdit.pintsRemaining
                              });
  }



}
