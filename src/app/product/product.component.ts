import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];
  keywordFilter:string[];
  constructor(
    private title: Title,
    private productService: ProductService,
    private router: Router
  ) {


  }

  ngOnInit() {
    this.title.setTitle('สินค้าทั้งหมด');
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(product => this.product = product);
  }

  onShowDetail(product: Product) {
    this.router.navigate(['/product', product.id, 'product_name', product.c_title]); //ส่ง ID ไปหน้าแสดง Detail
  }


}
