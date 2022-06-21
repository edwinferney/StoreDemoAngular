import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sort: any[]): any[] {

    const sortField = sort[0];
    const sortDirection = sort[1];

    if (sortDirection === 'asc')
    {
      value.sort((a: any,b: any)=> {
        if(typeof(a[sortField])==='string'){
          let x = a[sortField].toLowerCase();
          let y = b[sortField].toLowerCase();
          if ( x < y) { return -1};
          if ( x > y) { return 1};
          return 0;
        }

        if(typeof(a[sortField]==='number')){
          return a[sortField] - b[sortField]
        }
        return 0;
      });
    }
    else{
      value.sort((b: any,a: any)=> {
        if(typeof(a[sortField])==='string'){
          let x = a[sortField].toLowerCase();
          let y = b[sortField].toLowerCase();
          if ( x < y) { return -1};
          if ( x > y) { return 1};
          return 0;
        }

        if(typeof(a[sortField]==='number')){
          return a[sortField] - b[sortField]
        }
        return 0;
      });

    }
    return value;

  }

}
