import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, [search]): string {
    search = 'a';
    return search ? text.replace(new RegExp(search, 'gi'),(match) => `<span class="highlight">${match}</span>`) : text;
  }

}

