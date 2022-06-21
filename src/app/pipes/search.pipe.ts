import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], s: string): any[] {    
    return value.filter(p => p.title.toLowerCase().indexOf(s.toLowerCase()) >= 0);
  }

}
