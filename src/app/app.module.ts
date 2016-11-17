import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    NewsallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'', component: NewsComponent},
      { path:'product', component: ProductComponent},
      { path:'product/:id', component: ProductDetailComponent},
      { path:'staff', component: StaffComponent},
      { path:'about', component: AboutComponent},
      { path:'newsall', component: NewsallComponent},
      { path:'news/:id', component: NewsComponent},
      { path:'**', redirectTo:''}
    ],{useHash: true})
  ],
  providers: [
    Title,
    NewsService
  ], //ขั้นตอนของการเรียกใช้ service กำหนดใน providers
  bootstrap: [AppComponent]
})
export class AppModule { }
