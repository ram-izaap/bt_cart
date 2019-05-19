import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cart: CartInterface;

  // source for observable
  private cartSource: BehaviorSubject<CartInterface> = new BehaviorSubject({items: {},count: 0});
  // observable stream
  public cart$ = this.cartSource.asObservable();

  constructor() { 
    this.cart = {
      items: {},
      count: 0
    }
  }

  /**
   * add
   */
  public add(product: any, qty = 1) {
    console.log(qty);

    product.orderedQty = qty;
    
    if (!this.cart.items[product.id]) {
      this.cart.items[product.id] = product;
    }
    
    this.updateCount();

    this.cartSource.next(this.cart);
  }

  /**
   * update
   */
  public update(product: any, qty = 1) {
    console.log(product, qty);
  }
  /**
   * remove
   */
  public remove(product: any) {
    delete this.cart.items[product.id];
    this.updateCount();
    this.cartSource.next(this.cart);
  }

  /**
   * getItems
   */
  public getCart() {
    return this.cart;
  }

  private updateCount() {
    this.cart.count = Object.keys(this.cart.items).length;
  }
  
}

export interface CartInterface {
  items: {[key: number]: any};
  count: number;
}