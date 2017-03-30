import { Pipe, PipeTransform } from '@angular/core';
import { Tap } from './tap'

@Pipe({
  name: 'abvFilter'
})
export class AbvFilterPipe implements PipeTransform {

  transform(value: any, strength: string){


    var output: Tap[]= [];

    var filter = function(high,low) {
      for (let i=0;i<value.length; i++) {
        if ( value[i].alcoholContent >= low && value[i].alcoholContent < high ) {
          output.push(value[i]);
        }
      }
    }

    if( strength === 'high' ) {

      filter(100, 5.0);
      return output;
    } else if ( strength === 'medium' ) {
      filter(5.0, 3.0);
      return output;
    } else if (  strength === 'low' ) {
      filter(3.5, 0);
      return output;
    } else {
      return value;
    }
  }
}
