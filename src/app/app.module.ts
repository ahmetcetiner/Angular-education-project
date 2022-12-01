import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductFilterPipe } from './Pipes/productPipe/product-filter.pipe';
import { AlertifyService } from './services/alertifyService/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientBannerComponent } from './components/layout/client-banner/client-banner.component';
import { ClientFooterComponent } from './components/layout/client-footer/client-footer.component';
import { ClientLayoutComponent } from './components/layout/client-layout/client-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ClientBannerComponent,
    ClientFooterComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
