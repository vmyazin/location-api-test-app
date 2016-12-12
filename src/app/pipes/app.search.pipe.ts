import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search',
	pure: false
})

export class SearchPipe implements PipeTransform {
  transform(items, searchTerm) { 
    // let searchTerm = searchTerms[0];
    
    // let searchTerm = searchTerms[0]
    console.log(items, searchTerm);
    
    return items.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}