import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/Observable/throw'; // เอาเข้ามาเพราะว่า Observable ไม่เจอ throw

import { Product } from './product'; // import class
import { ProductDetail } from './product-detail';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  getProduct(): Observable<Product[]> {
    return this.http.get('http://codingthailand.com/api/get_courses.php')
      .map((res: Response) => <Product[]>res.json()) // ถ้า ยกข้อมูลมาทั้งก้อนก็ไม่ต้อง json(). ต่ออะไร
      .catch(this.handleError);
  }

  getProductDetail(id: number): Observable<ProductDetail[]> {
    return this.http.get(`http://www.codingthailand.com/api/get_course_detail.php?course_id=${id}`)
      .map((res: Response) => <ProductDetail[]>res.json()) // ถ้า ยกข้อมูลมาทั้งก้อนก็ไม่ต้อง json(). ต่ออะไร
      .catch(this.handleError);
  }


  // แยก error
  private handleError(error: any) {
    return Observable.throw(error.json() || 'server error');
  }


}
