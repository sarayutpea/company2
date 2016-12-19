import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit, OnChanges {
  // รับค่าจาก html
  @Input() item_view: number;
  @Output() itemClick: EventEmitter<String> = new EventEmitter<string>();
  rate: string;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.item_view > 1000) {
      this.rate = "นิยมมาก";
    } else {
      this.rate = "นิยมน้อย";
    }
  }

  rateClick(): void {
    // เมื่อคลิกให้กำหนดค่า Output ตามด้านล่าง
    console.log(`จำนวนการดู ${this.item_view} ครั้ง`);
    this.itemClick.emit(`จำนวนการดู ${this.item_view} ครั้ง`);  // คลิกแล้วส่งออกไป
  }
}
