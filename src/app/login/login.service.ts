import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/Observable/throw'; // เอาเข้ามาเพราะว่า Observable ไม่เจอ throw
@Injectable()
export class LoginService {

  // token: string;
  profile:any;

  constructor(private http: Http) { }

  login(username, password) {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //ทำตามข้อกำหนดของ Backend ว่าต้องส่งอย่างไร

    let data = {
      "client_id": "xRkVLCMDIYqb2oeGaPXsxXtw4rDzh6Qq", // Default App
      "username": username,
      "password": password,
      "connection": "Username-Password-Authentication",
      "grant_type": "password",
      "scope": "openid"

      // ในตัวแปรนี้ ต้องให้เหมือนใน API
    }

    return this.http.post("https://metold.auth0.com/oauth/ro", data, { headers: myHeader })
      .map((res: Response) => {

        let token = res.json().id_token; //รับ id_token จาก API
        let accesstoken = res.json().access_token; //รับ id_token จาก API
        console.log(res.json());
        if (token) {
          // this.token = token; // วิธีแรก
          localStorage.setItem('token', token); //เก็บ token ชื่อ 'token'
          localStorage.setItem('accesstoken', accesstoken);

          return true; // if success
        } else {
          return false; // is faild
        }
      }).catch(this.handleError);
  }

  getProfile(): Observable<Object> {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json'); //ทำตามข้อกำหนดของ Backend ว่าต้องส่งอย่างไร
    let token = localStorage.getItem('token');
    let data = {
      "id_token": token

      // ในตัวแปรนี้ ต้องให้เหมือนใน API ต้องการ
    }

    return this.http.post("https://metold.auth0.com/tokeninfo", data, { headers: myHeader })
      .map((res: Response) => {
        let profile = res.json();
        if (profile) {
          localStorage.setItem('profile', JSON.stringify(profile)); //set ให้กับ localStorage แบบทั้งหมด เป็น JSON
          this.profile = profile;
          return this.profile;
        }

      }).catch(this.handleError);
  }

  logout(): void {

    localStorage.removeItem('token'); // remove token
    localStorage.removeItem('profile');
    localStorage.removeItem('accesstoken');

  }


  // แยก error
  private handleError(error: any) {
    console.log(error.json().error);
    return Observable.throw(error.json().error_description || 'server error');
  }

}
