import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NewsService } from '../news.service';
import { News } from '../news';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {
  news: Observable<News[]>;
  isToggleImage: boolean = true;
  constructor(private title: Title, private newsService: NewsService) { }


  ngOnInit() {
    this.title.setTitle('ข่าวทั้งหมด');
    this.news = this.newsService.getNews(); // return by Observable
  }

  toggleImage(): void {
    this.isToggleImage = !this.isToggleImage; //สลับ Boolean true false โดยใช้ ! และต่อด้วยตัวเอง

  }



}
