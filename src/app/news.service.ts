import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; //import  Http กับ Response

import { Observable } from 'rxjs/Observable'; // import Observable
// import 'rxjs/Rx'; 
// import all Rxjs operator but very slow
import 'rxjs/add/operator/map'; // import map only make faster
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
  apiKey: string = 'b62f7011492c44a0a04cb400995e0648';
  source: string = 'bloomberg';
  sortBy: string = 'top';
  apiUrl: string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(private http: Http) {

  }

  getNews() {
    return this.http.get( this.apiUrl ) //รับค่าข้อมูลมาจาก URL
    .map((res:Response) => res.json().articles) //แม๊พ res ให้เป็น json.article (articles ได้มาจาก json ของ link)
    .catch((error:any) => Observable.throw(error.json().message || 'server Error'));

  }

}
