import { Component, OnInit } from '@angular/core';
import { CartService, CartInterface } from 'src/app/providers/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: CartInterface;
  public items = [];
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this
      .cartService
      .cart$
      .subscribe((cart: CartInterface) => {
        this.cart = cart;
        this.items = [];
        for (const key in this.cart.items) {
          if (this.cart.items.hasOwnProperty(key)) {
            this.items.push(this.cart.items[key]);
          }
        }
      });
    
  }

  updateCart(e: any, item) {
    let qty = parseInt(e.target.value);
    if (isNaN(qty)) {
      return;
    }

    this.cartService.add(item, qty);
    console.log(this.cartService.getCart())
  }

  removeItem(item) {
    this.cartService.remove(item);
    console.log(this.cartService.getCart())
  }

  goToCheckoutPage() {
    this.router.navigate(['order']);
  }

}
