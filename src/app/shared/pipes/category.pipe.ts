import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '1 - Documentos': return 'code';
      case '2 - Outros' : return  'book';
      case '3 - Já existente' : return  'done_outline';
    }
    return 'code';
  }

}
//category
