import { RoleGuardService } from './services/role-guard.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderComponent } from './components/order/order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "order", component: OrderComponent, canActivate: [AuthGuard] },
  { path: "receipt", component: ReceiptComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent, canActivate: [RoleGuardService] },
  { path: "pageNotFound", component: PageNotFoundComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: '**', redirectTo: '/pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
