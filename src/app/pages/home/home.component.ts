import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/providers/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  public topProducts = [];
  constructor(private productService: ProductService) { 
    
  }

  ngOnInit() {
    this.topProducts = this.productService.getTopProducts();
  }

}
