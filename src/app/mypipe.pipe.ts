import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
//Return with : any
  transform(value: any, args?: any): any {
    return ''+ value.toLowerCase();
  }

}
