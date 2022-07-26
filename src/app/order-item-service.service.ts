import { Injectable } from '@angular/core';
import { OrderItem } from './OrderItems';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class OrderItemServiceService {

  apiUrl='http://localhost:36351/';
  constructor(private  http: HttpClient) {  }

  public getAllOrderItems(fColor,fSize)
  {
    return this.http.get<OrderItem[]>(this.apiUrl+`order/GetAllOrderItems?fColor=${fColor}&fSize=${fSize}`);

  }
 public updOrderItem(oi:OrderItem)
 {
   return this.http.post(this.apiUrl+`order/UpdOrderItem`,oi);
 }
  public removeOrderItem(id: number) {
    console.log(id);
    return this.http.delete(this.apiUrl+`order/DelOrderItem?id=${id}`);
  }


}
