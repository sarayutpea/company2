import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router'; // Router ฝั่งรับบค่า
import { Location } from '@angular/common';

import { ProductService } from '../product.service';
import { ProductDetail } from '../product-detail';

import { Subscription } from 'rxjs/Subscription'; // import มาเพราะว่า สามารถ unsubscript ได้

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  productDetail: ProductDetail[];
  errorMessage: string;
  sub: Subscription;
  sub2: Subscription;
  product_name: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product_name = params['product_name'];
      this.title.setTitle(this.product_name);
      this.getProductDetail();
    });
  }

  getProductDetail() {
    this.sub2 = this.productService.getProductDetail(this.id)
      .subscribe(productDetail => this.productDetail = productDetail,
      error => this.errorMessage = <any>error);
  }
  ngOnDestroy() {
    console.log('Destoyed');
    this.sub.unsubscribe; //unsubscribe ข้อมูล ควรทำเพื่อลดการใช้ memory
    this.sub2.unsubscribe;
  }

  goBack() {
    this.location.back();
  }

  onClick(item) {
    alert(item);
  }



}
