import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

  transform(stockUrgency: string): string {

    switch (stockUrgency) {
      case 'STOCK_HIGH': return 'High';
      case 'STOCK_LOW': return 'Low'
      case 'STOCK_MEDIUM': return 'Medium'
      default: return 'Empty';
    }
  }

}
