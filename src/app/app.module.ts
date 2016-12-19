import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { NewsComponent } from './news/news.component';
import { NewsallComponent } from './newsall/newsall.component';

import { NewsService } from './news.service';
import { ProductService } from './product.service';
import { ProductRateComponent } from './product/product-rate.component';
import { MypipePipe } from './mypipe.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthRegisterService } from './auth-register/auth-register.service';
import { LoginService } from './login/login.service';
import { AuthguardService } from './authguard.service';
import { MessageComponent } from './message/message.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { Report4Component } from './report4/report4.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDRm-GTP2P1CInS2EjUGTTPLuPXOpAoO8g",
  authDomain: "metold-97f86.firebaseapp.com",
  databaseURL: "https://metold-97f86.firebaseio.com",
  storageBucket: "metold-97f86.appspot.com",
  messagingSenderId: "951727539390"
};


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BestsellerComponent,
    LoginComponent,
    SlideComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    AboutComponent,
    StaffComponent,
    NewsComponent,
    NewsallComponent,
    ProductRateComponent,
    MypipePipe,
    ProductFilterPipe,
    RegisterComponent,
    Register2Component,
    Register3Component,
    AuthRegisterComponent,
    MessageComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // angular 2 firebase
    RouterModule.forRoot([
      { path: '', component: NewsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id/product_name/:product_name', component: ProductDetailComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'about', component: AboutComponent },
      { path: 'newsall', component: NewsallComponent, canActivate: [AuthguardService] }, //ตัวอย่างการดึง authguard มาใช้ ต้อง Login ก่อนถึงจะสามารถดูข่าวได้
      { path: 'news/:id', component: NewsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register2', component: Register2Component },
      { path: 'register3', component: Register3Component },
      { path: 'message', component: MessageComponent },
      { path: 'auth0', component: AuthRegisterComponent },
      { path: 'report1', component: Report1Component },
      { path: 'report2', component: Report2Component },
      { path: 'report3', component: Report3Component },
      { path: 'report4', component: Report4Component },
      { path: '**', redirectTo: '' }
    ], { useHash: true })
  ],
  providers: [Title, NewsService, ProductService, AuthRegisterService, LoginService, AuthguardService], //ขั้นตอนของการเรียกใช้ service กำหนดใน providers
  bootstrap: [AppComponent]
})
export class AppModule { }
