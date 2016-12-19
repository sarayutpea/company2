import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/Observable/throw'; // เอาเข้ามาเพราะว่า Observable ไม่เจอ throw


@Injectable()
export class AuthRegisterService {

  constructor(private http: Http) { }


  register(email, password): Observable<boolean> {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //ทำตามข้อกำหนดของ Backend ว่าต้องส่งอย่างไร

    let data = {
      "client_id": "xRkVLCMDIYqb2oeGaPXsxXtw4rDzh6Qq", // Default App
      "email": email,
      "password": password,
      "connection": "Username-Password-Authentication"

      // ในตัวแปรนี้ ต้องให้เหมือนใน API
    }

    return this.http.post("https://metold.auth0.com/dbconnections/signup", data, { headers: myHeader })
      .map((res: Response) => {
        let data = res.json();
        if (data) {
          return true; // if success
        } else {
          return false; // is faild
        }
      }).catch(this.handleError);
  }// end of register method

  // แยก error
  private handleError(error: any) {
    console.log(error.json());
    return Observable.throw(error.json() || 'server error');
  }

}
