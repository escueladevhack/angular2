import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuantoFalta',
  pure: false
})
export class CuantoFaltaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(tarea => !tarea.completada).length;
  }

}
