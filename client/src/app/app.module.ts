import { AuthGuardService } from './services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightPipe } from './highlight.pipe';
import { NgHighlightModule } from 'ngx-text-highlight';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { FileSaverModule } from 'ngx-filesaver';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    OrderComponent,
    HeaderComponent,
    HighlightPipe,
    ReceiptComponent,
    AdminComponent,
    PageNotFoundComponent,
  ],
  imports: [
    FileSaverModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgHighlightModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() { 
        return localStorage.getItem('token');
        } 
     }
   })
  ],
  providers: [FileSaverModule, 
  
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
