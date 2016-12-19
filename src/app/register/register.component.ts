import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('สมัครสมาชิค แบบง่าย');
  }

  register(value):void{
    console.log(value.username);
    console.log(value.password);
    console.log(value.email);
  }

}
