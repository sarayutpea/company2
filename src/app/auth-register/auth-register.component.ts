import { Component, OnInit } from '@angular/core';
import {  AuthRegisterService } from './auth-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {
loading:boolean = false;
isError:boolean = false;
errorMessage:string;


  constructor(private authregisterService:AuthRegisterService, private router:Router) { }

  ngOnInit() {
    
  }

  register(form:any){
    this.loading = true;
    this.authregisterService.register(form.email, form.password).subscribe(
      result => {
        if(result === true){
          this.loading = false;
          console.log('insert ok ok');
          this.router.navigate(['/']);
        }
      },
      error => {
        
        this.errorMessage = <any>error;
        this.loading = false;
        this.isError = true;
      }
    );


    // console.log(form);

    // this.authregisterService.register();
  }

}
