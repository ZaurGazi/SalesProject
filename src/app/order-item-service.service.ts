import { Injectable } from '@angular/core';
import { OrderItem } from './OrderItems';

@Injectable({
  providedIn: 'root',
})
export class OrderItemServiceService {
  OrderItems: OrderItem[] = [
    {
      id: 1,
      name: 'Model 1',
      color: 'red',
      price: 20,
      quantity: 1,
      size: 20,
      sku: 'sku1',
      style: 'style1',
      mode: 1,
    },
    {
      id: 2,
      name: 'Model 2',
      color: 'blue',
      price: 30.60,
      quantity: 2,
      size: 10,
      sku: 'sku2',
      style: 'style2',
      mode: 1,
    },
    {
      id: 3,
      name: 'Model 3',
      color: 'red',
      price: 40.45,
      quantity: 3,
      size: 10,
      sku: 'sku3',
      style: 'style3',
      mode: 1,
    },
  ];
  constructor() {}

  public removeOrderItem(id: number) {
    this.OrderItems.forEach((item, index) => {
      if (item.id === id) this.OrderItems.splice(index, 1);
    });
  }
  public filterByColumnOrderItem(color: string, size):OrderItem[] {
    return this.OrderItems.filter(f=>f.color==(color=='all'?f.color:color) && f.size== (size=='all'?f.size:size));
  }
  public getTotalSummary(): number {
    let sum = 0;
    this.OrderItems.forEach((item, index) => {
      sum += item.quantity * item.price;
    });
    return sum;
  }
}
