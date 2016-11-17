import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service'; // import เพื่อใช้ service
 
import { News } from '../news'; // import เพื่อใช้ model

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 news:News[]; //สร้าง Array เปล่าไว้ แสดงที่หน้าเว็บ

  constructor(private newsServie: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsServie.getNews().subscribe(news => this.news = news); //get data from NewsService
  }

}
