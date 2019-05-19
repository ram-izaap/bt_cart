import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/providers/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productData: any;
  @Input() colWidth: string;

  public qty: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.add(this.productData, this.qty);
    console.log(this.cartService.getCart());
  }

}
