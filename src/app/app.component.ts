import { Component } from '@angular/core';
import { OrderItemServiceService } from './order-item-service.service';
import { OrderItem } from './OrderItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SalesProject';
  filColor='all'; filSize='all'; orderItems:OrderItem[]=[];
  constructor(public ordItmService: OrderItemServiceService) {}

  ngOnInit()
  {
   this.getAllFilteredOrderItems();
  }
  getAllFilteredOrderItems()
  {
    this.ordItmService.getAllOrderItems(this.filColor,this.filSize).subscribe(x=>{this.orderItems=x; });
  }
  onFilterSelectColor(value)
  {
   this.filColor=value;
   this.getAllFilteredOrderItems();
  }
  onFilterSelectSize(value)
  {
   this.filSize=value;
   this.getAllFilteredOrderItems();
  }
  onSelectQuantity(value, item) {
    this.orderItems.find((f) => f.itemId == item.itemId).quantity = +value;
  }

  onSelectSize(value, item) {
    this.orderItems.find((f) => f.itemId == item.itemId).size =+value ;
  }
  onSelectColor(value, item) {
    this.orderItems.find((f) => f.itemId == item.itemId).color = value;
  }
  onEdit(id) {
    this.orderItems.find((f) => f.itemId == id).mode = 2;
  }
  onUpdate(item) {
    this.ordItmService.updOrderItem(item).subscribe(x=>{
      this.orderItems.find((f) => f.itemId == item.itemId).mode = 1;
      this.getAllFilteredOrderItems();
    });
  }
  onRemove(id) {
    this.ordItmService.removeOrderItem(id).subscribe(x=>{
      this.getAllFilteredOrderItems();
    });

  }
  public getTotalSummary(): number {
    let sum = 0;
    this.orderItems.forEach((item, index) => {
      sum += item.itemPrice * item.quantity;
    });
    return sum;
  }
}
