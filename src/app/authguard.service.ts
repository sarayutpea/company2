import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
@Injectable()
export class AuthguardService implements CanActivate{

  constructor(private router:Router) { }
// ทำ Service เพื่อป้องกันการเข้าถึง

  canActivate(){
    if( localStorage.getItem('profile')){
      return true;
    }else{
      this.router.navigate(['/']);      
      return false;
    }
  }
}
