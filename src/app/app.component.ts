import { Component } from '@angular/core';
import { OrderItemServiceService } from './order-item-service.service';
import { OrderItem } from './OrderItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SalesProject';
  constructor(public ordItmService:OrderItemServiceService)
  {

  }
  onSelectQuantity(value,item)
  {
    this.ordItmService.OrderItems.find(f=>f.id==item.id).quantity=value;
  }
  onSelectSize(value,item)
  {
    this.ordItmService.OrderItems.find(f=>f.id==item.id).size=value;
  }
  onSelectColor(value,item)
  {
    this.ordItmService.OrderItems.find(f=>f.id==item.id).color=value;
  }
  onEdit(id)
  {
    this.ordItmService.OrderItems.find(f=>f.id==id).mode=2;
  }
  onUpdate(id)
  {
    this.ordItmService.OrderItems.find(f=>f.id==id).mode=1;
  }
  onRemove(id)
  {
     this.ordItmService.removeOrderItem(id);
  }
}
