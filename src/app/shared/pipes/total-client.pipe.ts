import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalClient'
})
export class TotalClientPipe implements PipeTransform {

  transform(value: number, tva:number): number{
    return value * (1 +tva/100);
  }

}
