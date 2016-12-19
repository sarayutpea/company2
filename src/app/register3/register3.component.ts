import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;



  constructor(private title: Title, private fb: FormBuilder) {
    // this.email = fb.control('', Validators.required);  // อันนี้ใส่ validate ได้ 1 ตัว
    this.email = fb.control('', Validators.compose([
      Validators.required,
      Register3Component.emailValidator,
      Register3Component.adminValidator
    ])); // อันนี้ใส่ validate ได้หลายตัว
    this.password = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));

    this.myForm = fb.group({
      'email': this.email,
      'password': this.password
    });
  }

  static adminValidator(control: FormControl) {
    return control.value !== 'admin@gmail.com' ? null : { notAllow: true }; // ถ้าไม่เท่ากับ admin@gmail.com เงื่อนไข ก็ไมีมีอะไร ถ้าตรงก็ให้ Return true ออกไป

  }


  // custom Validators ทำเอง retuen เอง
  static emailValidator(control: FormControl) {
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regxp.test(control.value) ? null : { invalidEmail: true }; //ตั้งให้ชื่อว่า invalidEmail และนำไปใส่ที่ HasError ของ HTML 

  }

  ngOnInit() {
    this.title.setTitle('สมัครสมาชิคแบบ Reactive from');

  }


  register() {
    console.log(this.myForm.value);//ดึงออกมาทุกค่าเป็น object
    console.log(this.myForm.controls['email'].value); //ดึงออกมาทีละค่า
  }

}
