import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/Observable/throw'; // เอาเข้ามาเพราะว่า Observable ไม่เจอ throw

import { News } from './news';

@Injectable()
export class NewsService {
  apiKey: string = 'b62f7011492c44a0a04cb400995e0648';
  source: string = 'bloomberg';
  sortBy: string = 'top';
  apiUrl: string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(private http: Http) { }

  // getNews(){
  //   return this.http.get(this.apiUrl).map((res:Response) => res.json().articles).catch((error:any) => Observable.throw(error.json().message || 'server error'));
  // }

  getNews(): Observable<News[]> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => <News[]>res.json().articles)
      .catch(this.handleError) ;
  }

  // แยก error
  private handleError(error: any) {
    return Observable.throw(error.json().message || 'server error');

  }

}
