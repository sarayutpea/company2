import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], keywordFilter: string): Product[] {
    keywordFilter = keywordFilter ? keywordFilter.toLocaleLowerCase() : null;
    return keywordFilter ? value.filter((product: Product) => 
    product.c_title.toLocaleLowerCase().indexOf(keywordFilter) !== -1):value;

  }

}
