import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  standalone:true,
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  count: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductCount().subscribe(count => this.count = count);
  }
}
