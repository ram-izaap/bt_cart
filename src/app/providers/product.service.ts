import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private topProducts: Array<any> = [];
  constructor() { 

    this.topProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        img: 'assets/product-img-1.jpg'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 11,
        img: 'assets/product-img-1.jpg'
      },
      {
        id: 3,
        name: 'Product 3',
        price: 13,
        img: 'assets/product-img-1.jpg'
      }
    ];

  }

  /**
   * getTopProducts
   */
  public getTopProducts(): Array<any> {
    return this.topProducts;
  }
}
