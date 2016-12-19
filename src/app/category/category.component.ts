import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  product: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(product => this.product = product);
  }

  onShowDetail(event: Event, product: Product): void {
    this.router.navigate(['/product', product.id, 'product_name', product.c_title]);
    event.preventDefault(); //ถ้าไม่อยากให้ไปจาม link # ของ href ให้ใรับ Event
  }

}
