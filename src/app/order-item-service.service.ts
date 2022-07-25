import { Injectable } from '@angular/core';
import { OrderItem } from './OrderItems';

@Injectable({
  providedIn: 'root',
})
export class OrderItemServiceService {
  OrderItems: OrderItem[] = [
    {
      id: 1,
      name: 'Woman1',
      color: 'red',
      price: 2,
      quantity: 1,
      size: 20,
      sku: 'sku1',
      style: 'style1',
      mode:1
    },
    {
      id: 2,
      name: 'Woman2',
      color: 'blue',
      price: 3,
      quantity: 2,
      size: 10,
      sku: 'sku2',
      style: 'style2',
      mode:1
    },
    {
      id: 3,
      name: 'Woman3',
      color: 'red',
      price: 3,
      quantity: 3,
      size: 10,
      sku: 'sku3',
      style: 'style3',
      mode:1
    },
  ];
  constructor() {}

  public removeOrderItem(id: number) {
    this.OrderItems.forEach( (item, index) => {
      if(item.id === id) this.OrderItems.splice(index,1);
    });
  }
  public getTotalSummary():number
  {
    let sum=0;
    this.OrderItems.forEach( (item, index) => {
      sum+=item.quantity*item.price;
    });
    return sum;
  }
}
