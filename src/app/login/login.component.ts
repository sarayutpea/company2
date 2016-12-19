import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  errorMessage: string;
  isError: boolean;
  constructor(private loginService: LoginService) { }

  profile:any;

  ngOnInit() {
    let profile = localStorage.getItem('profile'); // ดึงค่ามาจาก Localstoreage
    if(profile){
      this.isLogin = true;
      this.profile = JSON.parse(profile);

      // JSON.parse เป็นการแปลง Json ให้เป็น javascript Object
    }
  }

  login(user: any) {
    console.log(user);
    this.loginService.login(user.username, user.password).subscribe(
      result => {
        if (result === true) {
          this.isLogin = true;
          this.isError = false;
          this.loginService.getProfile().subscribe(profile  => this.profile = profile); //เอาโปรไฟล์มาใส่ this.profile
          console.log('login OK');
          // หลังจากสำเร็จแล้วจะให้ทำอะไรต่อไหม
        }
      },
      error => {
        this.errorMessage = <any>error;
        this.isError = true;
      }
    );
  }




  logout() {
    this.loginService.logout();
    this.isLogin = false;    
    this.isError = false;
  }
}
