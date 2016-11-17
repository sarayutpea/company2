import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('ข่าวทั้งหมด');
  }

}
