import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

import { NewsService } from '../news.service';
import { News } from '../news';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  errorMessage: string;
  isLoading: boolean = false;

  constructor(private title: Title, private newsService: NewsService, private config: NgbCarouselConfig) { }

  ngOnInit() {
    // ตั้งค่าตัวสไล้ ng bootstrap
    this.config.interval = 1000;
    this.config.wrap = true;
    this.config.keyboard = true;

    this.title.setTitle('ข่าวทั้งหมด');
    this.getNews();
  }

  getNews() {
    this.isLoading = true;
    this.newsService.getNews()
      .subscribe(news => {
        this.news = news;
        this.isLoading = false;
      }, error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }
  // สร้าง getNews เพื่อ subscribe ข้อมูล จาก Service

  onSearch(search: string) {

    // console.log(search);
    if (search != '') {
      this.news = this.news
        .filter(item => item.title.toLowerCase()
          .includes(search.toLowerCase()));
    } else {
      this.getNews();
      // this.news = this.newsService.getNews();
    }
  }

}
