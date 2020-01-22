import { OrderListComponent } from './order-list/order-list.component';
import { AuthGuard } from '@/_helpers';
import { OrderComponent } from '@/order/order.component';
import { RegisterComponent } from '@/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '@/login/login.component';
import { HomeComponent } from '@/home/home.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
  {path: 'user/:id/orders', component: OrderListComponent, pathMatch: 'prefix', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
