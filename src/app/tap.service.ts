// This defines our hero.service used in components
import { Injectable } from '@angular/core';
// imports hero class definition
import { Tap } from './tap';

import { TAPS } from './mock-taps';

@Injectable()

export class TapService {
  getTaps(): Promise<Tap[]> {
    return Promise.resolve(TAPS);
  }

}
