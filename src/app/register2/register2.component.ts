import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Member } from '../member';
 
@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  educations:string[]=[
    'มัธยมศึกษา',
    'ปริญญาตรี',
    'ปริญญาโท'
  ];
  member:Member;
  

  constructor(private title:Title) {
    this.member = new Member('sarayut jansida','sarayut.jansoda@hotmail.com','0875661731','female','ปริญญาตรี',true);
   }

  ngOnInit() {

    this.title.setTitle('สมัครสมาชิคแบบยาก Validate Model');
  }

}
