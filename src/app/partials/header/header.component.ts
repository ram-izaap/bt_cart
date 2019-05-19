import { Component, OnInit } from '@angular/core';
import { CartService, CartInterface } from 'src/app/providers/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this
      .cartService
      .cart$
      .subscribe((cart: CartInterface) => {
        this.cartCount = cart.count;
      });
  }

}
