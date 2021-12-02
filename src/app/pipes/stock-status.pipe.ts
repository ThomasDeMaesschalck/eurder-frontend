import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

  transform(stockUrgency: string): string {

    switch (stockUrgency) {
      case 'STOCK_HIGH': return 'high';
      case 'STOCK_MEDIUM': return 'medium'
      default: return 'low';
    }
  }

}
