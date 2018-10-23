import { Pipe, PipeTransform } from '@angular/core';
import { Time } from '../classes/Time';

@Pipe({
  name: 'filterTimes'
})
export class FilterTimesPipe implements PipeTransform {

  transform(times: Time[], uf: string): any {
    return times.filter(time => time.uf === uf);
  }

}
