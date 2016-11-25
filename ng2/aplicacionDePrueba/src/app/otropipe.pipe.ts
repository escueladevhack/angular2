import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'otropipe'
})
export class OtropipePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return Math.round(value * 100) + '%';
  }

}
